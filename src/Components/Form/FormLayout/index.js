import React from "react";

const FormLayout = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} autoComplete="off">
    {children}
  </form>
);

export default FormLayout;
