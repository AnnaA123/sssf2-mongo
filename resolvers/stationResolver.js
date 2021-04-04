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
};
