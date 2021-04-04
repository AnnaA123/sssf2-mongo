const router = require("express").Router();
const e = require("express");
const connectionModel = require("../models/connectionModel.js");
const station = require("../models/stationModel.js");
const stationController = require("../controllers/stationController.js");

router
  .route("/")
  .post(stationController.postStation)
  .get(stationController.getStations);

router
  .route("/:id")
  .get(stationController.getOneStation)
  .delete(stationController.deleteStation);

module.exports = router;
