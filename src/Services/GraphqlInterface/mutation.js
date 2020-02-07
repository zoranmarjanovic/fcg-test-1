import graphQlTag from "graphql-tag";
import { carId } from "../../config";
import { carInfoQueryParams } from "./model";

export const mutateCarInfo = carInput => {
  return {
    mutation: graphQlTag`
      mutation updateCar($car: CarInput) {
        updateCar(car: $car) {
            ${carInfoQueryParams}
        }
      }
    `,
    variables: {
      car: { id: carId, ...carInput }
    }
  };
};
