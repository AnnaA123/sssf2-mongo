import { gql } from "apollo-server-express";

export default gql`
  type CurrentType {
    id: ID
    Comments: String
    IsFastChargeCapable: Boolean
    Title: String
  }
`;
