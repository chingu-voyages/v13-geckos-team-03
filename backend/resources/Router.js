const Router = require("express").Router();

const AuthControllers = require("./auth/auth.controllers");
const UserFilmMetaControllers = require("./UserFilmMeta/userFilmMeta.controllers");
const badRequest = require("../util/badRequest");

Router.route("/signup")
  .post(AuthControllers.signup)
  .all(badRequest);

Router.route("/login")
  .post(AuthControllers.login)
  .all(badRequest);

Router.route("/user")
  .post(UserFilmMetaControllers.createOne)
  .get(UserFilmMetaControllers.getOne)
  .put(UserFilmMetaControllers.updateOne)
  .delete(UserFilmMetaControllers.deleteOne);

module.exports = Router;
