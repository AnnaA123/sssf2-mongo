import CurrentType from "../models/currentTypeModel.js";

export default {
  Connection: {
    currentType: (parent, args) => {
      try {
        return CurrentType.findById(parent.CurrentType);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
  },
};
