import React from "react";
import Dropdown from "react-dropdown";

import "react-dropdown/style.css";

const InputDropdown = ({
  defaultOption = null,
  onChange,
  placeholder,
  options
}) => (
  <>
    <Dropdown
      options={options}
      onChange={onChange}
      value={defaultOption}
      placeholder={placeholder}
    />
  </>
);

export default InputDropdown;
