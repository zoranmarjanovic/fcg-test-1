import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCarData } from "../../../Store/Operations/carOperations";

import InputDropDown from "../../../Components/Input/DropDown";
import { FormDropDown, dataForForm } from "./model";
import {
  fetchMakeValues,
  fetchModelValues,
  fetchTrimValues
} from "../../../Services/formOperation";

import { FormLayout, Information, Button } from "./style";

function CarFinancialForm() {
  const dispatch = useDispatch();
  const { carInfo } = useSelector(state => state);
  const [formData, setFormData] = useState(dataForForm);
  const { make, model, trim, engine } = carInfo;
  const [modifiedCarInfo, setModifiedCarInfo] = useState({
    make,
    model,
    trim,
    engine
  });

  useEffect(() => {
    fetchMakeData();
  }, []);

  const fetchMakeData = async () => {
    const response = await fetchMakeValues();
    setFormData({ ...formData, ...response });
  };

  const formHandler = async ({ value }, key) => {
    setModifiedCarInfo({ ...modifiedCarInfo, ...{ [key]: value } });

    if (key === "make") {
      const response = await fetchModelValues(value);
      setFormData({ ...formData, ...response });
    } else if (key === "trim") {
      const response = await fetchTrimValues(carInfo.make, value);
      // setFormData({ ...formData, ...response });
    } else if (key === "engine") {
      //this is missing
    }
  };

  const submitForm = e => {
    e.preventDefault();
    updateCarData({ make: "BMW" }, dispatch);
  };

  return (
    <>
      <FormLayout onSubmit={submitForm}>
        <h4>A form to add information</h4>
        {FormDropDown.map(({ title, key, placeholder }) => (
          <Information key={key}>
            <h6>{title}</h6>
            <InputDropDown
              onChange={e => {
                // try to normalize the data
                formHandler(e, key);
              }}
              defaultOption={modifiedCarInfo[key]}
              options={formData[key]}
              placeholder={`Select ${placeholder}`}
            />
          </Information>
        ))}
        {/* Move button later if its used by other component */}
        <Button>Submit</Button>
      </FormLayout>
    </>
  );
}

export default CarFinancialForm;
