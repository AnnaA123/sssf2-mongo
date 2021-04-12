import mongoose from "mongoose";

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  ConnectionTypeID: {
    type: mongoose.Types.ObjectId,
    ref: "ConnectionType",
  },
  LevelID: {
    type: mongoose.Types.ObjectId,
    ref: "Level",
  },
  CurrentTypeID: {
    type: mongoose.Types.ObjectId,
    ref: "CurrentType",
  },
  Quantity: Number,
});

<<<<<<< HEAD
module.exports = mongoose.model("Connection", connectionSchema);
=======
export default mongoose.model("Connection", connectionSchema);
>>>>>>> gql-auth
