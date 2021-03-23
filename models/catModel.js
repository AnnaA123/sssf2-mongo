const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  age: {
    type: Number,
    min: [0, "how?"],
    max: [42, "okay grandpa "],
  },
  genre: {
    type: String,
    enum: ["male", "female", "robot"],
  },
});

module.exports = mongoose.model("Cat", catSchema);
