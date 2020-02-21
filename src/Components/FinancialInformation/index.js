import React from "react";
import { DateTime } from "../DateTime";
import { DateLocation, Margin, PriceInfo } from "./style";

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
      <h6>{itemHead}</h6>
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
