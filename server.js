import { ApolloServer } from "apollo-server-express";
import schemas from "./schemas/index.js";
import resolvers from "./resolvers/index.js";
import express from "express";
import dotenv from "dotenv";
import connectMongo from "./db.js";
import { checkAuth } from "./passport/authenticate.js";

dotenv.config();

/*
import https from "https";
import http from "http";
import fs from "fs";

const sslkey = fs.readFileSync("../ssl-key.pem");
const sslcert = fs.readFileSync("../ssl-cert.pem");

const options = {
  key: sslkey,
  cert: sslcert,
};
*/

(async () => {
  try {
    const conn = await connectMongo();
    if (conn) {
      console.log("Connected succesfully.");
    }

    // console.log("!!!!!!!!!!!error here: ", error.toString()); // fix later !!!

    const server = new ApolloServer({
      typeDefs: schemas,
      resolvers,
      context: async ({ req, res }) => {
        if (req) {
          const user = await checkAuth(req, res);
          return {
            req,
            res,
            user,
          };
        }
      },
    });

    process.env.NODE_ENV = process.env.NODE_ENV || "development";

    const app = express();

    server.applyMiddleware({ app });
    /*
    process.env.NODE_ENV = process.env.NODE_ENV || "development";
    if (process.env.NODE_ENV === "production") {
      // soon
    } else {
      localhost(app, 8000, 3000);
    }
    */

    app.listen({ port: 3000 }, () =>
      console.log(
        `🚀 Server ready at http://localhost:3000${server.graphqlPath}`
      )
    );

    /*
    http
      .createServer((req, res) => {
        res.writeHead(301, { Location: "https://localhost:8000" + req.url });
        res.end();
      })
      .listen(3000);

    https.createServer(options, app).listen(8000);
    */
  } catch (e) {
    console.log("server error: " + e.message);
  }
})();
