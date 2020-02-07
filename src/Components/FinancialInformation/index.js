import React from "react";
import { DateTime } from "../DateTime";

function FinancialInformation({
  item,
  itemHead,
  itemDate,
  itemLocation,
  itemPercentage
}) {
  return (
    <>
      <h6>{itemHead}</h6>
      {item && (
        <>
          <div>
            ${item}
            <span>
              (<DateTime purchaseDate={itemDate} />, {itemLocation})
            </span>
          </div>
          <div>{itemPercentage}% payments to buyer done</div>
        </>
      )}
      {!item && "Not Available"}
    </>
  );
}

export default FinancialInformation;
