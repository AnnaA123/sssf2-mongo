import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    levels: [Level]
  }

  type Level {
    id: ID
    Comments: String
    IsFastChargeCapable: Boolean
    Title: String
  }
`;
