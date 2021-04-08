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
    addStation: async (parent, args) => {
      const conns = await Promise.all(
        args.Connections.map(async (conn) => {
          let newConn = new Connection(conn);
          const result = await newConnection.save();
          return result._id;
        })
      );

      let newStation = new Station({
        ...args,
        Connections: conns,
      });
      return newStation.save();
    },
    modifyStation: async (parent, args) => {
      await Promise.all(
        args.Connections.map(async (conn) => {
          return Connection.findByIdAndUpdate(conn.id, conn, { new: true });
        })
      );
      let newStation = {
        Title: args.Title,
        AddressLine1: args.AddressLine1,
        Town: args.Town,
        StateOrProvince: args.StateOrProvince,
        Postcode: args.Postcode,
      };
      return await Station.findByIdAndUpdate(args.id, newStation, {
        new: true,
      });
    },
    deleteStation: async (parent, args) => {
      const delStat = await Station.findById(args.id);
      const delRes = await Promise.all(
        stat.Connections.map(async (conn) => {
          return Connection.findByIdAndDelete(conn._id);
        })
      );
      const result = await Station.findByIdAndDelete(args.id);
      return result;
    },
  },
};
