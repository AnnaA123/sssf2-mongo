import Level from "../models/levelModel.js";

export default {
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
