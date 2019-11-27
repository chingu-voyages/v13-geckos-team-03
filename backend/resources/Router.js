const Router = require("express").Router();

const AuthControllers = require("./auth/auth.controllers");
const UserFilmMetaControllers = require("./UserFilmMeta/userFilmMeta.controllers");
const badRequest = require("../util/badRequest");

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
  .all(badRequest);

Router.route("/login")
  .post(AuthControllers.login)
  .all(badRequest);

Router.route("/user")
  .get(protect, AuthControllers.getUser)
  .all(badRequest);

Router.route("/user-film-meta")
  .post(protect, UserFilmMetaControllers.createOne)
  .get(protect, UserFilmMetaControllers.getMany)
  .put(protect, UserFilmMetaControllers.updateOne)
  .delete(protect, UserFilmMetaControllers.deleteOne)
  .all(badRequest);

module.exports = Router;
