const express = require("express");

const app = express();

app.use(express.json());

const conn = require("./db/conn");

conn();

const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3000, function () {
  console.log("Server online!!!");
});
