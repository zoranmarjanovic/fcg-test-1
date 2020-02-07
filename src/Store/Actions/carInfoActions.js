import {
  FETCH_CAR_INFO_BEGIN,
  FETCH_CAR_INFO_SUCCESS,
  FETCH_CAR_INFO_ERROR
} from "../Constants";

const fetchCarInfoBegin = () => ({
  type: FETCH_CAR_INFO_BEGIN,
  loading: true
});

const fetchCarInfoSuccess = payload => ({
  type: FETCH_CAR_INFO_SUCCESS,
  payload
});

const fetchCarInfoError = error => ({
  type: FETCH_CAR_INFO_ERROR,
  error: error
});

export { fetchCarInfoBegin, fetchCarInfoSuccess, fetchCarInfoError };
