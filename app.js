const express = require("express");

const app = express();

app.use(express.json());

const conn = require("./db/conn");

conn();

app.listen(3000, function () {
  console.log("Server online!!!");
});
