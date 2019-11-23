const mongoose = require("mongoose");

const config = require("./config")

module.exports = () => {
  mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    // useUnifiedTopology: true
  }).catch(err => console.log(err));

  mongoose.connection.on("error", err =>  console.log(err));
}