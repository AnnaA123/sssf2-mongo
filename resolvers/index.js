import stationResolver from "./stationResolver.js";
import connectionResolver from "./connectionResolver.js";
import connectionTypeResolver from "./connectionTypeResolver.js";
import currentTypeResolver from "./currentTypeResolver.js";
import levelResolver from "./levelResolver.js";
import { gql } from "apollo-server-express";
import levelModel from "../models/levelModel.js";

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [
  linkSchema,
  stationResolver,
  connectionResolver,
  connectionTypeResolver,
  currentTypeResolver,
  levelResolver,
];
