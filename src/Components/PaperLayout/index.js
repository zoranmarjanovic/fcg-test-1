import React from "react";

import { FormLayout } from "./style";
import { TitleH4 } from "../Titles";

const PaperLayout = ({ children, title, onSubmit }) => (
  <FormLayout onSubmit={onSubmit} autoComplete="off">
    <TitleH4 value={title} />
    {children}
  </FormLayout>
);

export default PaperLayout;
