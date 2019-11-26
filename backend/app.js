const express = require("express");

const setupMiddleware = require("./util/setupMiddleware");
const Router = require("./resources/Router");
const DB = require("./DB");

const app = express();
setupMiddleware(app);

app.use("/api", Router);

// Return 404 if no routes match
app.all("*", (req, res) => {
  res.status(404).json({ message: "No resource found at that location!" });
});

app.use((err, req, res, next) => {
  // console.log(err);
  res.status(500).json({
    messages: [...err]
  });
});

DB();

module.exports = app;
