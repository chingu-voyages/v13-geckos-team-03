const express = require("express");
const morgan = require("morgan");

function SetupMiddleware(app) {
  app.use(express.json());
  if(!process.env.MODE === "test") app.use(morgan("dev"));
}

module.exports = SetupMiddleware;