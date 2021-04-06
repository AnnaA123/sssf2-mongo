import Level from "../models/levelModel.js";

export default {
  Query: {
    levels: () => {
      try {
        return Level.find();
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
  },
  Connection: {
    level: (parent, args) => {
      try {
        return Level.findById(parent.Level);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
  },
};
