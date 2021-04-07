import Connection from "../models/connectionModel.js";

export default {
  Query: {
    connections: async () => Connection.find(),
  },
};
