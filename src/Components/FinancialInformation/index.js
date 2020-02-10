import React from "react";
import { DateTime } from "../DateTime";
import { DateLocation, Margin } from "./style";

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
          <div>
            ${item}
            {margin ? <Margin>+{margin}</Margin> : null}
            <DateLocation>
              (<DateTime purchaseDate={itemDate} />, {itemLocation})
            </DateLocation>
          </div>
          <div>{itemPercentage}% payments to buyer done</div>
        </>
      )}
      {!item && "Not Available"}
    </>
  );
}

export default FinancialInformation;
