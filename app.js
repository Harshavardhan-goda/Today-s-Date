const express = require("express");
const app = express();

app.get("/", (require, response) => {
  let date = new Date();
  response.send("3-4-2023");
});

app.listen(3000);
module.exports = app;
