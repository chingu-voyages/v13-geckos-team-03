const Router = require("express").Router();

const UserControllers = require("./User/user.controllers");

Router.route("/user")
  .post(UserControllers.createUser)
  .get(UserControllers.getUser)
  .put(UserControllers.updateUser)
  .delete(UserControllers.deleteUser)

module.exports = Router;