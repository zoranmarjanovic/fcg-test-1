import styled from "styled-components";

export const InformationLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  box-shadow: 1px 5px 6px rgba(0, 0, 0, 0.3);
`;

export const ImageHolder = styled.div`
  padding: 10px;
  min-width: 230px;
  max-width: 230px;
  & > ${"img"} {
    max-width: 100%;
  }
`;

export const InformationHolder = styled.div`
  padding: 10px;
  min-width: 250px;
  & > ${"h4"} {
    font-size: 16px;
    margin-bottom: 12px;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 6px;
  }
`;

export const Information = styled.div`
  font-size: 14px;
  margin-bottom: 14px;
  & > ${"h6"} {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;
