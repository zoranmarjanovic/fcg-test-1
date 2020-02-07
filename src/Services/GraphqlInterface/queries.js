import graphQlTag from "graphql-tag";
import { carInfoQueryParams } from "./model";
// Same a Query as from model.
export const queryCarInfo = carInfoId => ({
  query: graphQlTag`
    query car($id: ID!) {
      car(id: $id) {
        ${carInfoQueryParams}
      }
    }
  `,
  variables: {
    id: carInfoId
  }
});
