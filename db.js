import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const connection = await mongoose.connect(process.env.CM_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    return connection;
  } catch (e) {
    console.log("Connection to db failed: " + e);
  }
};

export default connectMongo;

/*
const mongoose = require("mongoose");

// Currently connects to chargemap db
(async () => {
  try {
    await mongoose.connect(process.env.CM_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
  } catch (err) {
    console.error("Connection to db failed", err);
  }
})();

module.exports = mongoose.connection;
*/
