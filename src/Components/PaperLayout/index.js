import React from "react";

import { FormLayout, FormHeading } from "./style";

const PaperLayout = ({ children, title, onSubmit }) => (
  <FormLayout onSubmit={onSubmit}>
    <FormHeading>{title}</FormHeading>
    {children}
  </FormLayout>
);

export default PaperLayout;
