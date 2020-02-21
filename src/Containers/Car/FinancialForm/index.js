import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Paper from "../../../Components/PaperLayout";
import FormLayout from "../../../Components/Form/FormLayout";
import InputDropDown from "../../../Components/Form/DropDown";
import { FORM_DROP_DOWN } from "./contants";
import { TitleH5 } from "../../../Components/Titles";

import { updateCarData } from "../../../Store/Operations/carOperations";
import {
  fetchMakeValues,
  fetchModelValues,
  fetchTrimValues
} from "../../../Services/formOperation";

import { Information, Button } from "./style";

function FinancialForm() {
  const dispatch = useDispatch();
  const { carInfo } = useSelector(state => state);
  const [formVisibility, setFormVisibility] = useState(false);
  const [customCarInfo, setCustomCarInfo] = useState();

  useEffect(() => {
    const { make, model, id } = carInfo || {};
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
        make: value,
        model: null,
        modelOptions: [],
        trim: null,
        trimOptions: []
      });
    } else if (key === "model") {
      initiateFetchTrimData(customCarInfo["make"], value);
      setData({
        make: customCarInfo["make"],
        model: value,
        trim: null,
        trimOptions: []
      });
    } else if (key === "trim") {
      setData({
        make: customCarInfo["make"],
        model: customCarInfo["model"],
        trim: value
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
        make: make || "",
        model: model || "",
        trim: trim || ""
      },
      dispatch
    );
  };

  return (
    <Paper title={"Update Information"}>
      <FormLayout onSubmit={submitForm}>
        <div data-testid="financial-form-holder">
          {formVisibility &&
            FORM_DROP_DOWN.map(({ title, key, placeholder }) => {
              const val = customCarInfo[key];
              const valueToPass = val
                ? {
                    label: val, //keeping the label and value for same now
                    value: val
                  }
                : null;
              return (
                <Information key={key}>
                  <TitleH5 value={title} />
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
        </div>

        {!formVisibility && <div>Loading Car Details, Please wait</div>}
        {formVisibility && (
          <Button data-testid="submit-form" primary={carInfo.loading}>
            {carInfo.loading ? "Processing" : "Submit"}
          </Button>
        )}
      </FormLayout>
    </Paper>
  );
}

export default FinancialForm;
