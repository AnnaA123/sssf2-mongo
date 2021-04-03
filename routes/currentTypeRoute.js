const router = require("express").Router();
const e = require("express");
const currentType = require("../models/currentTypeModel.js");
const currentTypeController = require("../controllers/currentTypeController.js");

router.route("/").get(currentTypeController.getCurrentTypeList);

router
  .route("/:id")
  .get(currentTypeController.getOneCurrentType)
  .delete(currentTypeController.deleteCurrentType);

module.exports = router;
