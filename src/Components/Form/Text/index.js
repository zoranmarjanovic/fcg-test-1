import React, { useState } from "react";

const InputText = ({
  defaultValue = "",
  onChange,
  className,
  placeholder = "Enter your search",
  name
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);

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
      className={className}
      type="text"
      onChange={onChangeHandler}
    />
  );
};

export default InputText;
