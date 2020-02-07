import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "../../Components/Header";
import CarInformation from "../CarInformation";
import CarFinancialForm from "../CarFinancialForm";
import { fetchCarInfo } from "../../Store/Operations/carOperations";

import { FormTaskLayer } from "./style";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCarInfo(dispatch);
  }, [dispatch]);

  return (
    <>
      <Header title={"FCG coding challenge"} />
      <CarInformation />
      <FormTaskLayer>
        <CarFinancialForm />
      </FormTaskLayer>
    </>
  );
}

export default App;
