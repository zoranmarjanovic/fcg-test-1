import { createStore } from "redux";

import RootReducers from "./Reducers";

const Store = createStore(RootReducers);

export default Store;
