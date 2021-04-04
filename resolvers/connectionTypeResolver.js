import ConnectionType from "../models/connectionTypeModel.js";

export default {
  Connection: {
    connectionType: (parent, args) => {
      try {
        return ConnectionType.findById(parent.ConnectionType);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
  },
};
