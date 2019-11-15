const app = require("express")();

const Router = require("./controller/Router.js");

console.log(process.env.MODE);

app.use("/api", Router)



// start up server
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})