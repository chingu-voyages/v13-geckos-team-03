const mongoose = require("mongoose");

const config = require("./config")

module.exports = async () => {
  try {
    await mongoose.connect(config.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("The mongoose has landed");
  } catch (err) {
    console.log(err);
  };
}