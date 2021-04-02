const router = require("express").Router();
const e = require("express");
const connections = require("../models/connectionModel.js");

router.route("/").get(async (req, res) => {
  try {
    const posts = await connections.find();
    res.send(posts);
  } catch (err) {
    console.error("query failed", err);
    res.send("error");
  }
});

router
  .route("/:id")
  .get(async (req, res) => {
    res.json(await connections.findById(req.params.id));
  })
  .delete(async (req, res) => {
    const del = await connections.deleteOne({ _id: req.params.id });
    res.send(`connection deleted`);
  });

module.exports = router;
