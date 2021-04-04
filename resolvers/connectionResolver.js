import Connection from "../models/connectionModel.js";

export default {
  Station: {
    connection: (parent, args) => {
      try {
        return Connection.findById(parent.Connections);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
  },
};
