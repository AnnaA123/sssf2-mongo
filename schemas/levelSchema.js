import { gql } from "apollo-server-express";

export default gql`
  extend type Query: {
    levelType: [Level]
  }

  type CurrentType {
    id: ID
    Comments: String
    IsFastChargeCapable: Boolean
    Title: String
  }
`;
