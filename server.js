import { ApolloServer } from "apollo-server-express";
import schemas from "./schemas/index.js";
import resolvers from "./resolvers/index.js";
import express from "express";
import dotenv from "dotenv";
import connectMongo from "./db.js";

dotenv.config();

(async () => {
  try {
    const conn = await connectMongo();
    if (conn) {
      console.log("Connected succesfully.");
    }

    const server = new ApolloServer({
      typeDefs: schemas,
      resolvers,
    });

    const app = express();

    server.applyMiddleware({ app });

    app.listen({ port: 3000 }, () =>
      console.log(
        `🚀 Server ready at http://localhost:3000${server.graphqlPath}`
      )
    );
  } catch (e) {
    console.log("server error: " + e.message);
  }
})();

/*
"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");

app.use(express.urlencoded({ extended: false }));

app.use("/cat", require("./routes/catRoutes.js"));
app.use("/station", require("./routes/stationRoutes.js"));
app.use("/connections", require("./routes/connectionRoutes.js"));
//app.use("/connectiontype", require("./routes/connectionTypeRoutes.js"));
app.use("/currenttype", require("./routes/currentTypeRoute.js"));
app.use("/level", require("./routes/levelRoutes.js"));

db.on("connected", () => {
  app.listen(3000, () => {
    console.log("express server started port 3000");
  });
});
*/
