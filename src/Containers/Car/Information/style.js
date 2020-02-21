import styled from "styled-components";

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
  @media (max-width: 768px) {
    grid-area: ${props => props.styleId};
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
