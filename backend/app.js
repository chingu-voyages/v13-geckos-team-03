const express = require("express");

const setupMiddleware = require("./util/setupMiddleware.js")
const Router = require("./controller/Router.js");

const app = express();

setupMiddleware(app);

app.use("/api", Router);

// Return 404 if no routes match
app.all("*", (req, res) => {
  res.status(404).json({message: "No resource found at that location!"})
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})