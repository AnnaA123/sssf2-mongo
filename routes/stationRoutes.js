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
      Location: {
        type: "Point",
        coordinates: [[[req.body.lat]], [[req.body.lng]]],
      },
    });
    res.send(`station ${post.Title} created with id: ${post._id}`);
  })
  .get(async (req, res) => {
    try {
      const amount = req.query.limit;
      const sorted = req.query.sort;
      const posts = await station
        .find()
        .byTown(req.query.town)
        .skip(parseInt(sorted))
        .limit(parseInt(amount));
      res.send(posts);
    } catch (err) {
      console.error("query failed", err);
      res.send("error");
    }
    //res.send(await station.find());
  });

router
  .route("/:id")
  .get(async (req, res) => {
    res.send(await station.findById(req.params.id));
  })
  .delete(async (req, res) => {
    const del = await station.deleteOne({ _id: req.params.id });
    res.send(`station deleted`);
  });

module.exports = router;
