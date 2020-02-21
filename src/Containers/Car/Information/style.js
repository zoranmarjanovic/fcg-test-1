import styled from "styled-components";

const ELEMENTS_SEPARATION_SPACE = "0 0 10px";

export const InformationLayout = styled.div`
  display: grid;
  box-shadow: 1px 5px 6px rgba(0, 0, 0, 0.3);
  @media (min-width: 768px) {
    grid-template-columns: auto 1fr 1fr;
  }
  @media (max-width: 768px) {
    max-width: none;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    grid-template-areas:
      "imageInfo financialInfo"
      "carInfo .";
  }
  @media (max-width: 480px) {
    grid-template-areas:
      "imageInfo"
      "financialInfo"
      "carInfo";
    padding: 10px;
  }
`;

export const ImageHolder = styled.div`
  padding: 10px;
  min-width: 230px;
  max-width: 230px;
  & > ${"img"} {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    max-width: none;
    grid-area: imageInfo;
    border: 1px solid #eaeaea;
    box-shadow: 0px 2px 12px rgba(1, 1, 1, 0.2);
    border-radius: 5px;
  }
  @media (max-width: 480px) {
    margin: ${ELEMENTS_SEPARATION_SPACE};
  }
`;

export const InformationHolder = styled.div`
  padding: 10px;
  min-width: 250px;
  & > ${"h4"} {
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    grid-area: ${props => props.styleId};
    padding: 12px 12px;
    min-width: 250px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  @media (max-width: 480px) {
    margin: ${ELEMENTS_SEPARATION_SPACE};
  }
`;

export const Information = styled.div`
  font-size: 14px;
  margin-bottom: 14px;
  & > ${"h5"} {
    font-size: 12px;
    margin-bottom: 5px;
  }
  @media (max-width: 768px) {
    & > ${"h5"} {
      font-size: 16px;
      padding: 12px 0 0;
      margin-bottom: 10px;
    }
  }
`;
