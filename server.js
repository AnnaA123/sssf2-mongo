"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");

db.on("connected", () => {
  app.listen(3000, () => {
    console.log("express server started port 3000");
  });
});
