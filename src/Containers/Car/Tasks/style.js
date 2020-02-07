import styled from "styled-components";

export const InformationLayout = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 1px 5px 6px rgba(0, 0, 0, 0.3);
`;

export const ImageHolder = styled.div`
  padding: 10px;
  min-width: 200px;
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

export const MainHeading = styled.h3`
  padding: 15px 10px;
  margin-bottom: 10px;
`;
