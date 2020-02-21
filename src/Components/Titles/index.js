import React from "react";
import styled from "styled-components";

const H3 = styled.h4`
  font-size: 24px;
`;

const H4 = styled.h4`
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const H5 = styled.h5`
  font-size: 16px;
`;

const H6 = styled.h6`
  font-size: 16px;
`;

export function TitleH3({ value = "", classes }) {
  return <H3 className={classes}>{value}</H3>;
}

export function TitleH4({ value = "", classes }) {
  return <H4 className={classes}>{value}</H4>;
}

export function TitleH5({ value = "", classes }) {
  return <H5 className={classes}>{value}</H5>;
}

export function TitleH6({ value = "", classes }) {
  return <H6 className={classes}>{value}</H6>;
}
