const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("./user.model");
const hash = require("../../util/hash");

const salt = 8;

const generateToken = user => {
  const token = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.APP_SECRET
  );
  return token;
};

const validate = body => {
  let messages = [];
  if (!body.email) {
    messages.push("email is required");
  }
  if (!body.password) {
    messages.push("password is required");
  }
  return messages;
};

const signup = async req => {
  const errors = validate(req.body);
  if (errors.length) {
    return {
      statusCode: 400,
      body: {
        errors
      }
    };
  }

  try {
    const hashedPassword = await hash(req.body.password, salt);
    const userExists = await User.find({
      email: req.body.email
    });
    if (userExists.length) {
      return {
        statusCode: 400,
        body: {
          errors: ["email already signed up"]
        }
      };
    }
    const newUser = await User.create({
      email: req.body.email,
      password: hashedPassword
    });
    return {
      statusCode: 200,
      cookie: generateToken(newUser),
      body: {
        email: newUser.email,
        _id: newUser._id
      }
    };
  } catch (err) {
    console.log("signup error:\n\n", err);
    return {
      statusCode: 500,
      body: {
        errors: ["mongoose error"]
      }
    };
  }
};

const login = async (req, res) => {
  if (req.user) {
    return {
      statusCode: 400,
      body: {
        errors: ["already logged in"]
      }
    };
  }
  const errors = validate(req.body);
  if (errors.length) {
    return {
      statusCode: 400,
      body: {
        errors
      }
    };
  }

  try {
    const user = await User.findOne({
      email: req.body.email
    });

    if (!user)
      return {
        statusCode: 400,
        body: {
          errors: ["email not found"]
        }
      };

    const same = await bcrypt.compare(req.body.password, user.password);
    if (!same)
      return {
        statusCode: 401,
        body: {
          errors: ["password incorrect"]
        }
      };

    return {
      statusCode: 200,
      cookie: generateToken(user),
      body: {
        doc: user
      }
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: {
        errors: ["mongoose error"]
      }
    };
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    messages: ["logged out successfully"]
  });
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById({ _id: req.user._id });
    res.status(200).json({
      user
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { signup, login, logout, getUser };
