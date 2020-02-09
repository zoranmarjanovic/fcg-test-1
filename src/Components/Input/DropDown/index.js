import React, { useState, useEffect } from "react";
import Select from "react-select";

const InputDropdown = ({
  defaultValue = [],
  onChange,
  placeholder,
  id,
  name,
  options
}) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    if (!defaultValue) {
      setValue(() => null);
    }
  }, [defaultValue]);

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
    setValue({ label: e.value, value: e.value });
    if (e.value && onChange) {
      onChange(e.value, id);
    }
  };

  return (
    <Select
      options={normalizeData(options)}
      name={name}
      key={id}
      onChange={onChangeHandler}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default InputDropdown;
