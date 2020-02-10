import React, { useState } from "react";

const InputCheckBox = ({ checked = false, onChange, labelName, id }) => {
  const [inputValue, toggleInputValue] = useState(checked);

  const inputCheckBoxHandler = e => {
    const valueToSet = !inputValue;
    toggleInputValue(valueToSet);
    if (onChange) {
      onChange(id, valueToSet);
    }
  };

  return (
    <label>
      {labelName}
      <input
        id={id}
        data-testid={id}
        type="checkbox"
        onChange={inputCheckBoxHandler}
        checked={inputValue}
      />
    </label>
  );
};

export default InputCheckBox;
