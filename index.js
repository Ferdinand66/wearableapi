const express = require("express");
const app = express();
const clothes = require("./data/cloth.json");
const glasses = require("./data/glasses.json");
const watches = require("./data/watch.json");

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.get("/clothes", (req, res) => {
  res.send(clothes);
});

app.get("/glasses", (req, res) => {
  res.send(glasses);
});

app.get("/watches", (req, res) => {
  res.send(watches);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
