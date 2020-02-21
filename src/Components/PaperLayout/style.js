import styled from "styled-components";

export const FormLayout = styled.form`
  background: #fff;
  padding: 20px;
  box-shadow: 2px 6px 7px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: relative;
  & > ${"h4"} {
    margin-bottom: 20px;
  }
`;

export const FormHeading = styled.h4`
  font-size: 14px;
  margin-bottom: 20px;
`;
