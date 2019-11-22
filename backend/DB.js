const mongoose = require("mongoose");

const config = require("./config")

module.exports = () => {
  console.log(config.DB_URL)
  // mongoose.connect(config.DB_URL, {useNewUrlParser: true})
}