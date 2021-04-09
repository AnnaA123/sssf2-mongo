import { ApolloServer } from "apollo-server-express";
import schemas from "./schemas/index.js";
import resolvers from "./resolvers/index.js";
import express from "express";
import dotenv from "dotenv";
import connectMongo from "./db.js";
import { checkAuth } from "./passport/authenticate.js";
import https from "https";
import http from "http";
import fs from "fs";

dotenv.config();

const sslkey = fs.readFileSync("../ssl-key.pem");
const sslcert = fs.readFileSync("../ssl-cert.pem");

(async () => {
  try {
    const conn = await connectMongo();
    if (conn) {
      console.log("Connected succesfully.");
    }

    console.log(" error here "); // fix later !!!

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

    const app = express();

    server.applyMiddleware({ app });

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
