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

module.exports = { getLevelList, getOneLevel };
