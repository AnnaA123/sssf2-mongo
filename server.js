"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");

app.use(express.urlencoded({ extended: false }));

app.use("/cat", require("./routes/catRoutes.js"));
app.use("/station", require("./routes/stationRoutes.js"));

db.on("connected", () => {
  app.listen(3000, () => {
    console.log("express server started port 3000");
  });
});
