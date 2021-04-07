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

  Mutation: {
    addStation: (parent, args) => {
      const newStation = new Station(args);
      return newStation.save();
    },
    modifyStation: (parent, args) => {
      return Station.findByIdAndUpdate(args.id, args);
    },
    deleteStation: (parent, args) => {
      return Station.findByIdAndDelete(args.id, args);
    },
  },
};
