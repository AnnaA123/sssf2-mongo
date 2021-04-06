import { gql } from "apollo-server-express";

export default gql`
  extend type Query: {
    connectionType: [ConnectionType]
  }

  type ConnectionType {
    id: ID
    FormalName: String
    Title: String
  }
`;
