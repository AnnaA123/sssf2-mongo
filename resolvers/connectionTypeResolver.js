import ConnectionType from "../models/connectionTypeModel.js";

export default {
  Query: {
    connectiontypes: async () => ConnectionType.find(),
  },
};
