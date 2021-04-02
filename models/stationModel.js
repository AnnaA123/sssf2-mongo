const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stationSchema = new Schema({
  Title: String,
  Town: String,
  AddressLine1: String,
  StateOrProvince: String,
  Postcode: String,
  Location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  Connections: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Connection",
    },
  ],
});

stationSchema.query.byTown = function (town) {
  return this.find({ Town: new RegExp(town, "i") });
};

module.exports = mongoose.model("Station", stationSchema);
