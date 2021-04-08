import { Connection } from "mongoose";
import Station from "../models/stationModel.js";

export default {
  Query: {
    stations: (parent, args, context, info) => {
      if (args.bounds) {
        // check later
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
        return Station.find();
      }
    },
    station: (parent, args) => {
      return Station.findById(args.id);
    },
  },

  Mutation: {
    addStation: (parent, args) => {
      const conns = await Promise.all(args.Connections.map(async conn => {
        let newConn = new Connection(conn);
        const result = await newConnection.save();
        return result._id;
      }));

      let newStation = new Station({
        ...args,
        Connections: conns,
      });
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
