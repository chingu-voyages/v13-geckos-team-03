const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

function SetupMiddleware(app) {
  app.use(express.json());
  if(!process.env.MODE === "test") app.use(morgan("dev"));
  const origin = process.env.MODE ==="development"
  ? process.env.DEV_FRONTEND_URL
  : process.env.PROD_FRONTEND_URL
  app.use(cors({
    origin
  }))
}

module.exports = SetupMiddleware;