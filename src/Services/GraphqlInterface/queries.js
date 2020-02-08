import graphQlTag from "graphql-tag";
import { carInfoQueryParams } from "./model";
import { carId } from "../../config";

// Same a Query as from model.
export const queryCarInfo = carInfoId => ({
  query: graphQlTag`
    query car($id: ID!) {
      car(id: $id) {
        ${carInfoQueryParams}
      }
    }`,
  variables: {
    id: carInfoId
  }
});

export const queryMakeInfo = () => ({
  query: graphQlTag`
    query {
      make
    }`
});

export const queryModelInfo = make => ({
  query: graphQlTag`
      query model($make: String!) {
        model(make: $make)
      }`,
  variables: {
    make
  }
});

export const queryTrimInfo = (make, model) => ({
  query: graphQlTag`
    query model($make: String!, $model: String!) {
      trim(make: $make, model: $model)
    }
  `,
  variables: {
    make,
    model
  }
});

export const queryEngineInfo = (make, model, trim) => ({
  query: graphQlTag`
    query model($make: String!, $model: String!) {
      trim(make: $make, model: $model) {
        engine(make: $make, model: $model, trim: $trim)
      }
    }
  `,
  variables: {
    make,
    model,
    trim
  }
});

export const queryTasks = () => ({
  query: graphQlTag`
    query tasks($carId: ID!) {
      tasks(carId: $carId) {
        id
        taskType
        comment
        completed
      }
    }
  `,
  variables: {
    carId
  }
});
