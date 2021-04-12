import { ApolloServer } from "apollo-server-express";
import schemas from "./schemas/index.js";
import resolvers from "./resolvers/index.js";
import express from "express";
import dotenv from "dotenv";
import connectMongo from "./db.js";
import { checkAuth } from "./passport/authenticate.js";
import localhost from "./security/localhost.js";
import production from "./security/production.js";
import helmet from "helmet";

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
    // console.log("!!!!!!!!!!!error here: ", error.toString()); // fix later !!!

    const conn = await connectMongo();
    if (conn) {
      console.log("Connected succesfully.");
    }

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
    app.use(helmet());

    server.applyMiddleware({ app });

    process.env.NODE_ENV = process.env.NODE_ENV || "development";
    if (process.env.NODE_ENV === "production") {
      production(app, 3000);
    } else {
      production(app, 3000);
      // localhost(app, 8000, 3000);
    }

    /*
    app.listen({ port: 3000 }, () =>
      console.log(
        `🚀 Server ready at http://localhost:3000${server.graphqlPath}`
      )
    );
*/
    /*
    http
      .createServer((req, res) => {
        res.writeHead(301, { Location: "https://localhost:8000" + req.url });
        res.end();
      })
      .listen(3000);
/*
    https.createServer(options, app).listen(8000);
    */
  } catch (e) {
    console.log("server error: " + e.message);
  }
})();
