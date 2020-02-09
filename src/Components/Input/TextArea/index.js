import React, { useState } from "react";

const InputTextArea = ({
  defaultOption = "",
  onChange,
  placeholder = "Enter your search",
  name
}) => {
  const [inputValue, setInputValue] = useState(defaultOption);

  const onChangeHandler = e => {
    e.preventDefault();

    setInputValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      placeholder={placeholder}
      value={inputValue}
      name={name}
      type="text"
      onChange={onChangeHandler}
    />
  );
};

export default InputTextArea;
