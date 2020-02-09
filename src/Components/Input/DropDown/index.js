import React from "react";
import Select from "react-select";

const InputDropdown = ({
  value = [],
  onChange,
  placeholder,
  id,
  name,
  options
}) => {
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
    if (e.value && onChange) {
      onChange(e, id);
    }
  };

  return (
    <Select
      options={normalizeData(options)}
      name={name}
      key={id}
      isDisabled={!options.length}
      onChange={onChangeHandler}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default InputDropdown;
