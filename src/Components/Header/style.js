import styled from "styled-components";

export const Head = styled.header`
  color: ${props => (props.color ? props.color : "#333")};
  background-color: #eaeaea;
  padding: 16px 14px;
`;
