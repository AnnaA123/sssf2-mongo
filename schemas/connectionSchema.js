import { gql } from "apollo-server-express";

export default gql`
  extend type Query: {
    connections: [Connection]
  }

  type Connection {
    id: ID
    Quantity: Int
    ConnectionTypeID: ConnectionType
    LevelID: Level
    CurrentTypeID: CurrentType
  }

  input ConnectionInput {
    id: ID
    Quantity: Int
    ConnectionTypeID: ID
    LevelID: ID
    CurrentTypeID: ID
  }
`;
