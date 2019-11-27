const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

const signup = async (req, res, next) => {
  const messages = validate(req.body);
  if (messages.length) {
    res.status(400).json({
      errors: [...messages]
    });
    return;
  }

  try {
    const hashedPassword = await hash(req.body.password, salt);
    const userExists = await User.find({
      email: req.body.email
    });
    if (userExists.length) {
      res.status(400).json({
        errors: ["email already signed up"]
      });
      return;
    }
    const newUser = await User.create({
      email: req.body.email,
      password: hashedPassword
    });
    res.cookie("token", generateToken(newUser), {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
    });
    res.status(200).json({
      email: newUser.email,
      _id: newUser._id
    });
  } catch (err) {
    next(err);
    return;
  }
};

const login = async (req, res) => {
  if (req.user) {
    res.status(400).json({
      errors: ["already logged in"]
    });
    return;
  }
  const messages = validate(req.body);
  if (messages.length) {
    res.status(400).json({
      errors: [...messages]
    });
    return;
  }

  let user;
  try {
    user = await User.findOne({
      email: req.body.email
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: ["server error"] });
    return;
  }

  if (!user) {
    res.status(400).json({ errors: ["email not found"] });
    return;
  }

  // check password
  let same;
  try {
    same = await bcrypt.compare(req.body.password, user.password);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: ["server error"] });
    return;
  }

  // console.log(same)
  if (!same) {
    res.status(400).json({ errors: ["password incorrect"] });
    return;
  }

  const token = generateToken(user);
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
  });
  // send response
  res.status(200).json({
    email: user.email,
    _id: user._id
  });
  return;
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
