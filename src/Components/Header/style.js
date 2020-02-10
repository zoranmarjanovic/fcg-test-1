import styled from "styled-components";

export const Head = styled.header`
  color: ${props => (props.color ? props.color : "#fff")};
  padding: 16px 14px;
  background-color: #3498db;
  margin-bottom: 14px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
`;
