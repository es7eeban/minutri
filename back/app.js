const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(port, () => {
  console.log(`server in port ${port}`);
});
