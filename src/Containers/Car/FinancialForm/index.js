import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import InputDropDown from "../../../Components/Input/DropDown";
import { FormDropDown, dataForForm } from "./model";

import { updateCarData } from "../../../Store/Operations/carOperations";
import {
  fetchMakeValues,
  fetchModelValues,
  fetchTrimValues
} from "../../../Services/formOperation";

import { Information, Button, FormLayout } from "./style";

function FinancialForm() {
  const dispatch = useDispatch();
  const { carInfo } = useSelector(state => state);
  const [formData, setFormData] = useState({ ...dataForForm });
  const [formVisibility, setFormVisibility] = useState(false);

  useEffect(() => {
    initiateFetchMakeData();
  }, []);

  useEffect(() => {
    const { make, model, trim, id } = carInfo;
    if (id) {
      if (make) {
        initiateFetchModelData(make);
      }
      if (make && model) {
        initiateFetchTrimData(make, model);
      }
      setData({
        makeDefaultValue: make ? { label: make, value: make } : null,
        modelDefaultValue: model ? { label: model, value: model } : null,
        trimDefaultValue: trim ? { label: trim, value: trim } : null
      });
      setFormVisibility(true);
    }
  }, [carInfo]);

  const setData = response => {
    // Setting the form in async way and with in callback
    setFormData(formData => ({ ...formData, ...response }));
  };

  const resetForm = data => {
    setFormData({ ...dataForForm, ...data });
  };

  const formHandler = (value, key) => {
    if (key === "make") {
      initiateFetchModelData(value);
      resetForm({
        // we can automate reset function, for now I am keeping it like this
        make: formData["make"],
        makeDefaultValue: { label: value, value: value }
      });
    } else if (key === "model") {
      initiateFetchTrimData(formData["makeDefaultValue"]["value"], value);
      resetForm({
        make: formData["make"],
        makeDefaultValue: formData["make" + "DefaultValue"],
        model: formData["model"],
        modelDefaultValue: { label: value, value: value }
      });
    } // Skipping engine update for now
  };

  const initiateFetchMakeData = async () => {
    setData(await fetchMakeValues());
  };

  const initiateFetchModelData = async value => {
    setData(await fetchModelValues(value));
  };

  const initiateFetchTrimData = async (make, value) => {
    setData(await fetchTrimValues({ make, value }));
  };

  const submitForm = e => {
    e.preventDefault();
    // Skipping engine update for now
    const { make, model, trim } = e.target;
    updateCarData(
      { make: make.value, model: model.value, trim: trim.value },
      dispatch
    );
  };

  return (
    <FormLayout onSubmit={submitForm}>
      <h4>A form to add information</h4>
      {formVisibility &&
        FormDropDown.map(({ title, key, placeholder }) => {
          return (
            <Information key={key}>
              <h6>{title}</h6>
              <InputDropDown
                onChange={formHandler}
                id={key}
                name={key}
                defaultValue={formData[key + "DefaultValue"]}
                options={formData[key]}
                placeholder={`Select ${placeholder}`}
              />
            </Information>
          );
        })}
      {!formVisibility && <div>Loading Car Details, Please wait</div>}
      <Button>Submit</Button>
    </FormLayout>
  );
}

export default FinancialForm;
