import { gql } from "apollo-server-express";

export default gql`
  type Connection {
    id: ID
    Quantity: Number
    ConnectionType: ConnectionType
    Level: Level
    CurrentType: CurrentType
  }
`;
