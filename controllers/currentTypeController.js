const currentType = require("../models/currentTypeModel.js");

const getCurrentTypeList = async (req, res) => {
  try {
    res.json(await currentType.find());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOneCurrentType = async (req, res) => {
  try {
    res.json(await currentType.findById(req.params.id));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteCurrentType = async (req, res) => {
  res.json(await currentType.deleteOne({ _id: req.params.id }));
};

module.exports = { getCurrentTypeList, getOneCurrentType, deleteCurrentType };
