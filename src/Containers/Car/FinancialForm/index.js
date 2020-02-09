import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import InputDropDown from "../../../Components/Input/DropDown";
import { FormDropDown } from "./model";

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
  const [formVisibility, setFormVisibility] = useState(false);
  const [customCarInfo, setCustomCarInfo] = useState();

  useEffect(() => {
    const { make, model, id } = carInfo;
    if (id && !formVisibility) {
      setCustomCarInfo(carInfo);
      initiateFetchMakeData();
      // Only loading the options once at page load
      if (make) {
        initiateFetchModelData(make);
      }
      if (make && model) {
        initiateFetchTrimData(make, model);
      }
    }
  }, [carInfo]);

  useEffect(() => {
    const { make, model, trim, id } = carInfo;
    if (!formVisibility && id && (make.length || model.length || trim.length)) {
      // carInfo exist with other informations
      setFormVisibility(true);
    } else if (id) {
      // carInfo exist
      setFormVisibility(true);
    }
  }, [carInfo]);

  const setData = response => {
    // Setting the form in async way and with in callback
    setCustomCarInfo(formData => ({ ...formData, ...response }));
  };

  const formHandler = ({ value }, key) => {
    if (key === "make") {
      initiateFetchModelData(value);
      setData({
        // we can improve this function by supplying building more dynamic
        make: {
          label: value,
          value: value
        },
        model: null,
        trim: null
      });
    } else if (key === "model") {
      initiateFetchTrimData(customCarInfo["make"], value);
      setData({
        make: customCarInfo["make"],
        model: {
          label: value,
          value: value
        },
        trim: null
      });
    } else if (key === "trim") {
      setData({
        make: customCarInfo["make"],
        model: customCarInfo["model"],
        trim: {
          label: value,
          value: value
        }
      });
    } // Skipping engine update for now
  };

  const initiateFetchMakeData = async () => {
    const response = await fetchMakeValues();
    const { make } = response;
    setData({ makeOptions: make });
  };

  const initiateFetchModelData = async value => {
    const response = await fetchModelValues(value);
    const { model } = response;
    setData({ modelOptions: model });
  };

  const initiateFetchTrimData = async (make, value) => {
    debugger;
    const response = await fetchTrimValues(make, value);
    if (!response) {
      return;
    }
    const { trim } = response;

    setData({ trimOptions: trim });
  };

  const submitForm = e => {
    e.preventDefault();
    // Skipping engine update for now
    const { make, model, trim } = customCarInfo;
    updateCarData(
      {
        make: (make && make.value) || "",
        model: (model && model.value) || "",
        trim: (trim && trim.value) || ""
      },
      dispatch
    );
  };

  return (
    <FormLayout onSubmit={submitForm}>
      <h4>A form to add information</h4>
      {formVisibility &&
        FormDropDown.map(({ title, key, placeholder }) => {
          const val = customCarInfo[key];
          const valueToPass = val
            ? {
                label: val,
                value: val
              }
            : null;
          return (
            <Information key={key}>
              <h6>{title}</h6>
              <InputDropDown
                onChange={formHandler}
                id={key}
                name={key}
                value={valueToPass}
                options={customCarInfo[key + "Options"]}
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
