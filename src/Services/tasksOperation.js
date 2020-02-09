import { apolloClient, queryTasks, createCarTask, updateCarTask } from "./";

import { NotifyError, NotifySuccess } from "../Components/Toaster";

export const fetchCarTasks = async carId => {
  try {
    const response = await apolloClient().query(queryTasks(carId));
    // We can make better error response here
    if (response && response.data) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    NotifyError("Something went wrong in fetchCarTasks");
  }
};

export const createTask = async obj => {
  try {
    const response = await apolloClient().mutate(createCarTask(obj));
    NotifySuccess("Successfully created task :)");
  } catch (error) {
    NotifyError("Something went wrong in fetchCarTasks");
  }
};

export const updateCarTasks = async (taskId, value) => {
  try {
    const response = await apolloClient().mutate(updateCarTask(taskId, value));
    NotifySuccess("Successfully created task :)");
  } catch (error) {
    NotifyError("Something went wrong in fetchCarTasks");
  }
};
