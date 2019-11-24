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
}

const signup = async (req, res) => {
  try {
    const hashedPassword = await hash(req.body.password, salt);
    const newUser = await User.create({email: req.body.email, password: hashedPassword});
    res.status(200).json({
      email: newUser.email,
      token: generateToken(newUser)
    });
  } catch (err) {
    // !!! more than one type of error can happen here

    // duplicate key mongo error
    res.status(400).json({
      message: "That email is already signed up"
    })
    return;
  }
}

const login = async (req, res) => {
  if (!req.body.email) {
    res.status(400).json({
      message: "email is required"
    });
    return;
  }
  if (!req.body.password) {
    res.status(400).json({
      message: "password is required"
    });
    return;
  }

  let user;
  try {
    user = await User.findOne({
      email: req.body.email
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({message: "server error"});
    return;
  }

  if (!user) {
    res.status(400).json({message: "email not found"});
    return;
  }


  // check password
  let same;
  try {
    same = await bcrypt.compare(req.body.password, user.password); 
  } catch (err) {
    console.log(err)
    res.status(500).json({message: "server error"});
    return;
  }
  
  // console.log(same)
  if (!same) {
    res.status(400).json({message: "password incorrect"});
    return;
  }

  // send response
  res.status(200).json({
    email: user.email,
    token: generateToken(user)
  });
}

module.exports = { signup, login }