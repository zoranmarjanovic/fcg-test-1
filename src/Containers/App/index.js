import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "../../Components/Header";
import CarInformation from "../CarInformation";
import { fetchCarInfo } from "../../Store/Operations/carOperations";

import "./style";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCarInfo(dispatch);
  }, [dispatch]);

  return (
    <>
      <Header title={"FCG coding challenge"} />
      <CarInformation />
    </>
  );
}

export default App;
