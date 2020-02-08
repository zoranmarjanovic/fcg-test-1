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

export const FormLayout = styled.form`
  background: #fff;
  padding: 20px;
  box-shadow: 2px 6px 7px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  & > ${"h4"} {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const MainHeading = styled.h3`
  padding: 15px 10px;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  padding: 8px 22px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  background-color: #149e14;
  color: #fff;
`;
