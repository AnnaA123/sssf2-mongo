const level = require("../models/levelModel.js");

const getLevelList = async (req, res) => {
  try {
    res.json(await level.find());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOneLevel = async (req, res) => {
  try {
    res.json(await level.findById(req.params.id));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteLevel = async (req, res) => {
  res.json(await level.deleteOne({ _id: req.params.id }));
};

module.exports = { getLevelList, getOneLevel, deleteLevel };
