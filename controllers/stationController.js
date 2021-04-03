const station = require("../models/stationModel.js");

const postStation = async (req, res) => {
  try {
    const connections = req.body.Connections;
    const newConnections = await Promise.all(
      connections.map(async (c) => {
        let newConn = new connectionModel(c);
        const result = await newConnections.save();
        return result._id;
      })
    );

    const addStation = req.body.Station;
    addStation.Connections = newConnections;
    addStation.Location.type = "Point";

    const newStation = new stationModel(station);
    const result = await newStation.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: e.message });
  }
};

const getOneStation = async (req, res) => {
  try {
    const amount = req.query.limit;
    const sorted = req.query.sort;
    const posts = await station
      .find()
      .byTown(req.query.town)
      .skip(parseInt(sorted))
      .limit(parseInt(amount));
    res.send(posts);
  } catch (err) {
    console.error("query failed", err);
    res.send("error");
  }
};

const getStations = async (req, res) => {
  try {
    const stations = await (await station.findById(req.params.id)).populate({
      path: "Connections",
      populate: [
        { path: "ConnectionTypeID" },
        { path: "CurrentTypeID" },
        { path: "LevelID" },
      ],
    });
    res.json(stations);
  } catch (err) {
    res.status(500).json({ message: e.message });
  }
};

const deleteStation = async (req, res) => {
  const del = await station.deleteOne({ _id: req.params.id });
  res.send(`station deleted`);
};

module.exports = { postStation, getOneStation, getStations, deleteStation };
