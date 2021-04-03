"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");

app.use(express.urlencoded({ extended: false }));

app.use("/cat", require("./routes/catRoutes.js"));
app.use("/station", require("./routes/stationRoutes.js"));
app.use("/connections", require("./routes/connectionRoutes.js"));
//app.use("/connectiontype", require("./routes/connectionTypeRoutes.js"));
app.use("/currenttype", require("./routes/currentTypeRoute.js"));
app.use("/level", require("./routes/levelRoutes.js"));

db.on("connected", () => {
  app.listen(3000, () => {
    console.log("express server started port 3000");
  });
});
