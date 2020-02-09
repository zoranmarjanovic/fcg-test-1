import graphQlTag from "graphql-tag";
import { carId } from "../../config";
import { carInfoQueryParams } from "./model";

const setNullFields = values => {
  const obj = {};
  Object.entries(values).forEach(([key, value]) => {
    obj[key] = value === "" ? null : value;
  });
  return obj;
};

export const mutateCarInfo = carInput => ({
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
});

export const createCarTask = task => {
  console.log(task);
  return {
    mutation: graphQlTag`
      mutation createTask($carId: ID!, $task: TaskInput!) {
        createTask(carId: $carId, task: $task)
      }
    `,
    variables: {
      carId,
      task: task
    }
  };
};

export const updateCarTask = (taskId, completed) => {
  return {
    mutation: graphQlTag`
      mutation updateTask($id: ID!, $completed: Boolean!) {
        updateTask(id: $id, completed: $completed) {
          id
        }
      }
    `,
    variables: {
      id: taskId,
      completed
    }
  };
};
