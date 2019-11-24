const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("./user.model");
const hash = require("../../util/hash");

const salt = 8;

const signup = async (req, res) => {
  try {
    const hashedPassword = await hash(req.body.password, salt);
    const newUser = await User.create({email: req.body.email, password: hashedPassword});
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

const login = async (req, res) => {
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

  try {
    const user = await User.findOne({
      email: req.body.email
    });
    console.log(user)
    if (!user) {
      console.log("no user found")
      res.status(400).json({message: "email not found"});
    }
  } catch (err) {
    console.log(err)
    // res.status(500).json({message: "server error"});
  }



  // check password
  // let same;
  // try {
  //   same = await bcrypt.compare(req.body.password, user.password); 
  // } catch (err) {
  //   res.status(500).json({message: "server error"});
  // }
  
  // console.log(same)
  // if (!same) {
  //   res.status(400).json({message: "password incorrect"});
  // }

  // generate token
  // const token = jwt.sign(
  //   { _id: user._id, isAdmin: user.isAdmin },
  //   process.env.APP_SECRET
  // );

  // send response
  res.status(200).json({
    email: user.email
  });
}

module.exports = { signup, login }