import mongoose from "mongoose";

const connectMongo = async () => {
  console.log("!!!!!!!!!!!error here: ", error.toString());
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
