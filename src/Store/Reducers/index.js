import { combineReducers } from "redux";

import carReducers from "./carReducers";

const rootReducer = combineReducers({
  carInfo: carReducers
});

export default rootReducer;
