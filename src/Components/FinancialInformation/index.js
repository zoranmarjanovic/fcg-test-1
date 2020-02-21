import React from "react";
import { DateTime } from "../DateTime";
import { DateLocation, Margin, PriceInfo } from "./style";
import { TitleH5 } from "../Titles";

function FinancialInformation({
  item,
  itemHead,
  itemDate,
  itemLocation,
  itemPercentage,
  margin
}) {
  return (
    <>
      <TitleH5 value={itemHead} />
      {item && (
        <>
          <PriceInfo>
            ${item}
            {margin ? <Margin>+{margin}</Margin> : null}
            <DateLocation>
              (<DateTime purchaseDate={itemDate} />, {itemLocation})
            </DateLocation>
          </PriceInfo>
          <PriceInfo>{itemPercentage}% payments to buyer done</PriceInfo>
        </>
      )}
      {!item && "Not Available"}
    </>
  );
}

export default FinancialInformation;
