import Level from "../models/levelModel.js";

export default {
  Query: {
    levels: async () => Level.find(),
  },
};
