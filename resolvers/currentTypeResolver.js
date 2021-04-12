import CurrentType from "../models/currentTypeModel.js";

export default {
  Query: {
    currenttypes: async () => CurrentType.find(),
  },
};
