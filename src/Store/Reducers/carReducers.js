import {
  FETCH_CAR_INFO_BEGIN,
  FETCH_CAR_INFO_SUCCESS,
  FETCH_CAR_INFO_ERROR
} from "../Constants";

import { carInfoModel } from "../../Containers/CarInformation/model";

const carReducer = (state = carInfoModel, action) => {
  switch (action.type) {
    case FETCH_CAR_INFO_BEGIN:
      return { ...state, ...action.payload };

    case FETCH_CAR_INFO_SUCCESS:
      return { ...action.payload };

    case FETCH_CAR_INFO_ERROR:
      return {};

    default:
      return state;
  }
};

export default carReducer;
