import React, { useState, useEffect } from "react";
import Select from "react-select";

const InputDropdown = ({ value, onChange, placeholder, id, name, options }) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (!value) {
      setInputValue(null);
    }
  }, [value]);

  const normalizeData = options => {
    const constructedData = [];
    if (!options || !options.length) {
      return constructedData;
    }

    if (typeof options === "string") {
      return { label: options, value: options };
    }

    const firstElement = options[0];

    if (typeof firstElement === "string" || typeof firstElement === "number") {
      options.map(option => {
        constructedData.push({ label: option, value: option });
      });
      return constructedData;
    }
    return options;
  };

  const onChangeHandler = e => {
    if (onChange) {
      onChange(e, id);
    }
    setInputValue({ label: e.label, value: e.value });
  };

  return (
    <Select
      options={normalizeData(options)}
      name={name}
      key={id}
      isDisabled={!options || !options.length}
      onChange={onChangeHandler}
      value={inputValue}
      placeholder={placeholder}
    />
  );
};

export default InputDropdown;
