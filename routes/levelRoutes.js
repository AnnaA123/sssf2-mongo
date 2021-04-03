const router = require("express").Router();
const e = require("express");
const level = require("../models/levelModel.js");
const levelController = require("../controllers/levelController.js");

router.route("/").get(levelController.getLevelList);

router
  .route("/:id")
  .get(async (req, res) => {
    res.json(await level.findById(req.params.id));
  })
  .delete(async (req, res) => {
    const del = await level.deleteOne({ _id: req.params.id });
    res.send(`connection deleted`);
  });

module.exports = router;
