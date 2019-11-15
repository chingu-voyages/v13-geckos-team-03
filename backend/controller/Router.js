const Router = require("express").Router();

Router.route("/")
  .get((req, res) => {
    console.log("req.body:  ", req.body);
    res.json({what: "is this"})
  })

module.exports = Router;