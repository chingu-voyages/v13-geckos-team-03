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

// userSchema.pre("save", function(next) {
//   // don't hash password if it hasn't been changed
//   // if(!this.isNew) return next();

//   bcrypt.hash(this.password, 8)
//     .then(function(hash) {
//       this.password = hash;
//       next();
//     })
//     .catch(err => {
//       console.log(err);
//       next();
//     })
// });

module.exports = mongoose.model("user", userSchema);