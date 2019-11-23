const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {    
    timestamps: true
  }
);

userSchema.pre("save", next => {
  // don't hash password if it hasn't been changed
  if (!this.isModified("password")) return next();

  bcrypt.hash(this.password, 8)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => {
      console.log(err);
      next();
    })
});

module.exports = mongoose.model("user", userSchema);