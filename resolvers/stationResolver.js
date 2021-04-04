import Station from "../models/stationModel.js";

export default {
  Query: {
    stations: () => {
      return Station.find();
    },
    station: (parent, args) => {
      return Station.findById(args.id);
    },
  },
};
