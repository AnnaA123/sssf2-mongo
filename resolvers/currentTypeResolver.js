import CurrentType from "../models/currentTypeModel.js";

export default {
  Query: {
    currentTypes: () => {
      try {
        return CurrentType.find();
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
  },
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
