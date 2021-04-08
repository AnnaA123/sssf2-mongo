import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    station(id: ID): Station
    stations(bounds: Bounds, limit: Int, start: Int): [Station]
    stations: [Station]
  }

  type Station {
    id: ID
    Title: String
    AddressLine1: String
    Town: String
    StateOrProvince: String
    Postcode: String
    Location: LocationDetails
    Connections: [Connection]
  }

  type LocationDetails {
    coordinates: [Float]
    type: String
  }

  input LocationDetailsInput {
    coordinates: [Float]
  }

  input Bounds {
    _southWest: LatLng
    _northEast: Latlng
  }

  input LatLng {
    lat: Float
    lng: Float
  }

  extend type Mutation {
    addStation(
      Connections: [ConnectionInput]
      Title: String
      AddressLine1: String
      Town: String
      StateOrProvince: String
      Postcode: String
      Location: LocationDetailsInput
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
