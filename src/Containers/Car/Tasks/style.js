import styled from "styled-components";

export const FormLayout = styled.form`
  background: #fff;
  padding: 20px;
  box-shadow: 2px 6px 7px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: relative;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0px 0px -1px;
  background-color: #149e14;
  font-size: 20px;
  cursor: pointer;
  /* float: right; */
  color: #fff;
  position: absolute;
  right: 15px;
  bottom: 15px;
`;

export const TaskIconHolder = styled.button`
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #2385ff;
  font-size: 12px;
  color: #fff;
  margin-right: 10px;
`;

export const InputHolder = styled.form`
  position: relative;
  > h3 {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  > label {
    width: 100%;
    display: block;
    padding: 10px 0 10px;
    > input {
      width: 100%;
      min-height: 28px;
      font-size: 16px;
      padding: 4px 8px;
    }
  }
`;
export const TaskType = styled.h4`
  font-size: 14px;
  padding-bottom: 10px;
`;

export const AddButton = styled.button`
  padding: 8px 22px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  background-color: #149e14;
  color: #fff;
  cursor: pointer;
`;
