import { gql } from "apollo-server-express";

export default gql`
  extend type Query: {
    connection: [Connection]
  }

  type Connection {
    id: ID
    Quantity: Number
    ConnectionType: ConnectionType
    Level: Level
    CurrentType: CurrentType
  }
`;
