import React from "react";
import { useDispatch, useSelector } from "react-redux";

import FinancialInformation from "../../../Components/FinancialInformation";
import InputDropDown from "../../../Components/Input/DropDown";
import { updateCarData } from "../../../Store/Operations/carOperations";
import { statusDropDown, carNameMap } from "./model";

import {
  InformationLayout,
  ImageHolder,
  InformationHolder,
  Information
} from "./style";

function CarInformation() {
  const dispatch = useDispatch();
  const { carInfo } = useSelector(state => state);
  const { financialDetails } = carInfo;

  const {
    purchasePrice,
    purchaseDate,
    purchaseLocation,
    paymentDonePercentage,
    sellingPrice,
    margin,
    sellingDate,
    sellingLocation,
    sellingDonePercentage
  } = financialDetails;

  const dropdownChangeHandler = (e, key) => {
    updateCarData({ [key]: e.value }, dispatch);
  };

  return (
    <InformationLayout>
      {/* Car Image */}
      <ImageHolder>
        <img srcSet="/car_image.jpg" alt="car" />
      </ImageHolder>
      {carInfo.id && (
        <InformationHolder>
          <h4>Status</h4>
          {statusDropDown.map(({ options, title, key }) => {
            const inputValue = {
              label: carNameMap[carInfo[key]],
              value: carInfo[key]
            };
            return (
              <Information key={key}>
                <h6>{title}</h6>
                <InputDropDown
                  id={key}
                  onChange={dropdownChangeHandler}
                  value={inputValue}
                  options={options}
                  placeholder={`Select ${title}`}
                />
              </Information>
            );
          })}
        </InformationHolder>
      )}

      {/* Car Financial Information */}
      <InformationHolder>
        <h4>Financial Information</h4>
        <Information>
          <FinancialInformation
            item={purchasePrice}
            itemHead="Purchased"
            margin={margin}
            itemDate={purchaseDate}
            itemPercentage={purchaseLocation}
            itemLocation={paymentDonePercentage}
          />
        </Information>

        <Information>
          <FinancialInformation
            item={sellingPrice}
            itemHead="Sold"
            margin={margin}
            itemDate={sellingDate}
            itemPercentage={sellingDonePercentage}
            itemLocation={sellingLocation}
          />
        </Information>
      </InformationHolder>
    </InformationLayout>
  );
}

export default CarInformation;
