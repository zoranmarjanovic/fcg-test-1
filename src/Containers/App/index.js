import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "../../Components/Header";
import Car from "../Car";

function App() {
  return (
    <>
      <Header title={"FCG coding challenge"} />
      <Car />
    </>
  );
}

export default App;
