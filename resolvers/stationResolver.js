import Station from "../models/stationModel.js";

export default {
  Query: {
    stations: (parent, args, context, info) => {
      if (args.bounds) {
        const mapBounds = rectangleBounds(
          args.bounds_northEast,
          args.bounds._southWest
        );
        return Station.find({
          Location: {
            $geoWithin: {
              $geometry: mapBounds,
            },
          },
        }).populate({
          path: "Connections",
          populate: {
            path: "ConnectionTypeID LevelID CurrentTypeID",
          },
        });
      } else {
        return Station.find().limit(args.limit);
      }
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
