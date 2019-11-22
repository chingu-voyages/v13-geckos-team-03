const mongoose = require("mongoose");

const config = require("./config")

module.exports = async () => {
  console.log(config.DB_URL);
  try {
  await mongoose.connect(config.DB_URL, {useNewUrlParser: true})
  console.log("The mongoose has landed");
  } catch (err) {
    console.log(err);
  };
}