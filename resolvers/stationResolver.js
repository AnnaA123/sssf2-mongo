import Station from "../models/stationModel.js";

export default {
  Query: {
    stations: () => {
      try {
        return Station.find();
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
    station: (parent, args) => {
      try {
        return Station.findById(args.id);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
  },

  Mutation: {
    addStation: (parent, args) => {
      try {
        const newStation = new Station(args);
        return newStation.save();
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
    modifyStation: (parent, args) => {
      try {
        return Station.findByIdAndUpdate(args.id, args);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
    deleteStation: (parent, args) => {
      try {
        return Station.findByIdAndDelete(args.id, args);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
  },
};
