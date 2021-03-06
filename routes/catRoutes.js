/*
const router = require("express").Router();
const cat = require("../models/catModel.js");

router
  .route("/")
  .post(async (req, res) => {
    const post = await cat.create({
      name: req.body.name,
      age: req.body.age,
      genre: req.body.genre,
    });
    res.send(`cat post ${post.name} created with id: ${post._id}`);
  })
  .get(async (req, res) => {
    try {
      const posts = await cat.find().byGenre(req.query.genre);
      res.send(posts);
    } catch (err) {
      console.error("query failed", err);
      res.send("error");
    }
    //res.send(await cat.find()); //.where("age").gt(5));
  });

router
  .route("/:id")
  .get(async (req, res) => {
    res.send(await cat.findById(req.params.id));
  })
  .patch(async (req, res) => {
    const mod = await cat.updateOne(
      { _id: req.params.id },
      { name: req.body.name }
    );
    res.status(200).send(`updated sucessfully ${mod.nModified} cat post`);
  })
  .delete(async (req, res) => {
    const del = await cat.deleteOne({ _id: req.params.id });
    res.send(`deleted ${del.deletedCount} cat post`);
  });
module.exports = router;
*/
