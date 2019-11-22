const express = require("express");
const morgan = require("morgan");

function SetupMiddleware(app) {
  app.use(express.json());
  app.use(morgan("dev"));
}

module.exports = SetupMiddleware;