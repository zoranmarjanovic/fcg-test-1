import { NotifyError, NotifySuccess } from "../../Components/Toaster";

import {
  queryCarInfo,
  apolloClient,
  mutateCarInfo
} from "../../Services/index";

import {
  fetchCarInfoBegin,
  fetchCarInfoSuccess,
  fetchCarInfoError
} from "../Actions/carInfoActions";

import { carId } from "../../config";

export async function fetchCarInfo(dispatch) {
  try {
    dispatch(fetchCarInfoBegin());
    const response = await apolloClient().query(queryCarInfo(carId));

    // Proper status code needs to be implemented
    if (response && response.data) {
      const { car } = response.data;
      dispatch(fetchCarInfoSuccess(car));
    } else {
      dispatch(fetchCarInfoError());
      NotifyError();
    }
  } catch (error) {
    dispatch(fetchCarInfoError());
    NotifyError();
  }
}

export const updateCarData = async (carInput, dispatch) => {
  try {
    dispatch(fetchCarInfoBegin());

    const response = await apolloClient().mutate(mutateCarInfo(carInput));

    if (response && response.data) {
      const { updateCar } = response.data;
      dispatch(fetchCarInfoSuccess(updateCar));
      NotifySuccess("Successfully updated");
    } else {
      dispatch(fetchCarInfoError());
      NotifyError();
    }
  } catch (error) {
    dispatch(fetchCarInfoError());
    NotifyError();
  }
};
