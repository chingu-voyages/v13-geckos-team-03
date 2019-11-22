const Router = require("express").Router();

const UserController = require("./UserController");

Router.route("/user")
  .post(UserController.createUser)
  .get(UserController.getUser)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser)

module.exports = Router;