const router = require("express").Router();
const station = require("../models/stationModel.js");

router.route("/").get(async (req, res) => {
  res.send(await station.find());
});

router.route("/:id").get(async (req, res) => {
  res.send(await station.find(req.params.id));
});

module.exports = router;
