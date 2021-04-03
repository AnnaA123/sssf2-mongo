const router = require("express").Router();
const e = require("express");
const level = require("../models/levelModel.js");
const levelController = require("../controllers/levelController.js");

router.route("/").get(levelController.getLevelList);

router
  .route("/:id")
  .get(levelController.getOneLevel)
  .delete(levelController.deleteLevel);

module.exports = router;
