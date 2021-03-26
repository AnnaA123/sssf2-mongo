const router = require("express").Router();
const station = require("../models/stationModel.js");

router
  .route("/")
  .post(async (req, res) => {
    const post = await station.create({
      Title: req.body.Title,
      Town: req.body.Town,
      AddressLine1: req.body.AddressLine1,
      StateOrProvince: req.body.StateOrProvince,
      Postcode: req.body.Postcode,
      Location: req.body.Location,
    });
  })
  .get(async (req, res) => {
    res.send(await station.find());
  });

router.route("/:id").get(async (req, res) => {
  res.send(await station.find(req.params.id));
});

module.exports = router;
