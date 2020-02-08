import React, { useState } from "react";

const InputCheckBox = ({ checked = false, onChange, labelName, id }) => {
  const [localValue, toggleLocalValue] = useState(checked);

  const inputCheckBoxHandler = () => {
    const valueToSet = !localValue;
    toggleLocalValue(valueToSet);
    if (onChange) {
      onChange(id, valueToSet);
    }
  };

  return (
    <label>
      {labelName}
      <input
        type="checkbox"
        onChange={inputCheckBoxHandler}
        checked={localValue}
      />
    </label>
  );
};

export default InputCheckBox;
