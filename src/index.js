import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import App from "./Containers/App";
import store from "./Store";

import { GlobalStyles } from "./style";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </>,
  document.getElementById("root")
);
