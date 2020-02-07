import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import CarInformation from "./Information";
import CarFinancialForm from "./FinancialForm";
import { fetchCarInfo } from "../../Store/Operations/carOperations";

import { FormTaskLayer } from "./style";

function Car() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCarInfo(dispatch);
  }, [dispatch]);

  return (
    <>
      <CarInformation />
      <FormTaskLayer>
        <CarFinancialForm />
      </FormTaskLayer>
    </>
  );
}

export default Car;
