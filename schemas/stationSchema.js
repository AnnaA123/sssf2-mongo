import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        station(id: ID): Station
        stations(bounds: Bounds, limit: Int, start: Int): [Station] 
    }

    type Station {
        id: ID
        Title: String
        Town: String
        StateOrProvince: String
        Postcode: String
        Location: {
            type: String
            coordinates: [Number]
        }
        Connections: Connection
    }

    extend type Mutation {
        addStation(
            Connections: [ConnectionInput]
            Title: String!
            AddressLine1: String
            Town: String
            StateOrProvince: String
            Postcode: String
            Location: PointObjectInput
        ): Station

        modifyStation(
            id: ID!
            Connections: [ConnectionInput]
            Title: String
            AddressLine1: String
            Town: String
            StateOrProvince: String
            Postcode: String
            Location: String
        ): Station

        deleteStation(id: ID!): Station
    }
`;
