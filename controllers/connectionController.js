const connection = require("../models/connectionModel.js");

const getConnectionList = async (req, res) => {
  try {
    res.json(await connection.find());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOneConnection = async (req, res) => {
  try {
    res.json(await connection.findById(req.params.id));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteConnection = async (req, res) => {
  res.json(await connection.deleteOne({ _id: req.params.id }));
};

module.exports = { getConnectionList, getOneConnection, deleteConnection };
