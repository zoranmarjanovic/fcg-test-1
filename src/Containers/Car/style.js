import styled from "styled-components";

export const FormTaskLayer = styled.div`
  display: grid;
  padding: 20px;
  grid-gap: 10px;
  background-color: #f1f0f0;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const FormLayout = styled.form`
  background: #fff;
  padding: 20px;
  box-shadow: 2px 6px 7px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;
