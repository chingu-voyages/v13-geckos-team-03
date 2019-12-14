const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const config = require("../config");

const parseToken = (req, res, next) => {
  if (req.cookies && req.cookies.token) {
    const token = jwt.verify(req.cookies.token, config.APP_SECRET);
    req.user = {
      _id: token._id
    };
    return next();
  }
  return next();
};

function SetupMiddleware(app) {
  app.use(express.json());
  app.use(cookieParser());
  if (!process.env.MODE === "test") app.use(morgan("dev"));
  const origin =
    process.env.MODE === "development"
      ? process.env.DEV_FRONTEND_URL
      : process.env.PROD_FRONTEND_URL;
  app.use(
    cors({
      origin: "chingu-voyages.github.io/v13-geckos-team-03",
      credentials: true
    })
  );
  app.use(parseToken);
}

module.exports = SetupMiddleware;
