const Router = require("express").Router();

const AuthControllers = require("./auth/auth.controllers");
const UserFilmMetaControllers = require("./UserFilmMeta/userFilmMeta.controllers");
const badRequest = require("../util/badRequest");
const expressCallback = require("../util/expressCallback");

const protect = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      errors: ["not authorised"]
    });
    return;
  }
  return next();
};

Router.route("/signup")
  .post(AuthControllers.signup)
  .all(expressCallback(badRequest));

Router.route("/login")
  .post(AuthControllers.login)
  .all(expressCallback(badRequest));

Router.route("/logout")
  .get(AuthControllers.logout)
  .all(expressCallback(badRequest));

Router.route("/user")
  .get(protect, AuthControllers.getUser)
  .all(expressCallback(badRequest));

Router.route("/user-film-meta")
  .post(protect, expressCallback(UserFilmMetaControllers.createOne))
  .get(protect, expressCallback(UserFilmMetaControllers.getMany))
  .put(protect, expressCallback(UserFilmMetaControllers.updateOne))
  .delete(protect, expressCallback(UserFilmMetaControllers.deleteOne))
  .all(expressCallback(badRequest));

module.exports = Router;
