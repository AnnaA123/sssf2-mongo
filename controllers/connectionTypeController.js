const connectionType = require("../models/connectionTypeModel.js");

const getConnectionTypeList = async (req, res) => {
  try {
    res.json(await connectionType.find());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOneConnectionType = async (req, res) => {
  try {
    res.json(await connectionType.findById(req.params.id));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteConnectionType = async (req, res) => {
  res.json(await connectionType.deleteOne({ _id: req.params.id }));
};

module.exports = {
  getConnectionTypeList,
  getOneConnectionType,
  deleteConnectionType,
};
