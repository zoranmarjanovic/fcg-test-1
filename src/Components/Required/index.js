import React from "react";
import styled from "styled-components";

const Elem = styled.span`
  color: red;
`;

function Required({ value = "*", classes }) {
  return <Elem className={classes}>{value}</Elem>;
}

export default Required;
