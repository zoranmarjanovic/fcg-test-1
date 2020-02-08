import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import CarInformation from "./Information";
import FinancialForm from "./FinancialForm";
import Tasks from "./Tasks";

import { fetchCarInfo } from "../../Store/Operations/carOperations";

import { FormTaskLayer, FormLayout } from "./style";

function Car() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCarInfo(dispatch);
  }, [dispatch]);

  return (
    <>
      <CarInformation />
      <FormTaskLayer>
        <FinancialForm />
        <Tasks />
      </FormTaskLayer>
    </>
  );
}

export default Car;
