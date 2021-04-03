const router = require("express").Router();
const e = require("express");
const connectionType = require("../models/connectionTypeModel.js");
const connectionTypeController = require("../controllers/connectionTypeController.js");

router.route("/").get(connectionTypeController.getConnectionTypeList);

router
  .route("/:id")
  .get(connectionTypeController.getOneConnectionType)
  .delete(connectionTypeController.deleteConnectionType);

module.exports = router;
