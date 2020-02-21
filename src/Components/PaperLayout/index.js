import React from "react";

import { Layout } from "./style";
import { TitleH4 } from "../Titles";

const PaperLayout = ({ children, title, onSubmit }) => (
  <Layout>
    <TitleH4 value={title} />
    {children}
  </Layout>
);

export default PaperLayout;
