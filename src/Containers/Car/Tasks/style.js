import styled from "styled-components";

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

export const TaskList = styled.div`
  display: flex;
  padding-bottom: 20px;
  justify-content: space-between;
`;

export const TaskAction = styled.button`
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0px 0px -1px;
  background-color: #149e14;
  font-size: 20px;
  cursor: pointer;
  float: right;
  color: #fff;
`;
