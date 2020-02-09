import {
  FETCH_CAR_INFO_BEGIN,
  FETCH_CAR_INFO_SUCCESS,
  FETCH_CAR_INFO_ERROR
} from "../Constants";

const carInfoModel = {
  id: "",
  make: "",
  model: "",
  trim: "",
  financialDetails: {
    purchasePrice: "",
    purchaseDate: "",
    purchaseLocation: "",
    paymentDonePercentage: "",
    sellingPrice: "",
    sellingDate: "",
    sellingLocation: "",
    sellingDonePercentage: "",
    margin: ""
  }
};

const carReducer = (state = carInfoModel, action) => {
  switch (action.type) {
    case FETCH_CAR_INFO_BEGIN:
      return { ...state, loading: action.loading };

    case FETCH_CAR_INFO_SUCCESS:
      return { ...action.payload, loading: action.loading };

    case FETCH_CAR_INFO_ERROR:
      return { error: action.error };

    default:
      return state;
  }
};

export default carReducer;
