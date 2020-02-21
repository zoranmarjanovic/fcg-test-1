import styled from "styled-components";

export const ImageHolder = styled.div`
  padding: 10px;
  min-width: 200px;
`;

export const Information = styled.div`
  font-size: 14px;
  margin-bottom: 14px;
  & > ${"h6"} {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

export const MainHeading = styled.h3`
  padding: 15px 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  pointer-events: ${props => (props.primary ? "none" : "inherit")};
  padding: 8px 22px;
  cursor: pointer;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  background-color: ${props => (props.primary ? "#eaeaea" : "#149e14")};
  color: ${props => (props.primary ? "#000" : "#fff")};
  @media (max-width: 768px) {
    padding: 12px 30px;
  }
`;
