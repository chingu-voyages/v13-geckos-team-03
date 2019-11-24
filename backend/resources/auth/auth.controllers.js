const bcrypt = require("bcrypt");

const User = require("./user.model");

const signup = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 8);
    const newUser = await User.create({email: req.body.email, password: hash});
    res.status(200).json({
      newUser
    });
  } catch (err) {
    // !!! more than one type of error can happen here
    res.status(400).json({
      message: "That email is already signed up"
    })
    return;
  }
}

const login = (req, res) => {
  if (!req.body.email) {
    res.status(400).json({
      message: "email is required"
    })
  }
  if (!req.body.password) {
    res.status(400).json({
      message: "password is required"
    })
  }
  res.status(200).end();
}

module.exports = { signup, login }