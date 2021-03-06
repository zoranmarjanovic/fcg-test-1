import React from "react";
import { useDispatch, useSelector } from "react-redux";

import FinancialInformation from "../../../Components/FinancialInformation";
import { TitleH4, TitleH5 } from "../../../Components/Titles";
import InputDropDown from "../../../Components/Form/DropDown";
import { updateCarData } from "../../../Store/Operations/carOperations";
import { STATUS_DROP_DOWN, CAR_INFO_NAME_MAP } from "./constants";

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
      <InformationHolder styleId="carInfo">
        <TitleH4 value={"Status"} />
        {carInfo.id && (
          <div data-testid="status-holder">
            {STATUS_DROP_DOWN.map(({ options, title, key }) => {
              const inputValue = carInfo[key]
                ? {
                    label: CAR_INFO_NAME_MAP[carInfo[key]],
                    value: carInfo[key]
                  }
                : null;
              return (
                <Information key={key}>
                  <TitleH5 value={title} />
                  <InputDropDown
                    id={key}
                    name={key}
                    onChange={dropdownChangeHandler}
                    value={inputValue}
                    options={options}
                    placeholder={`Select ${title}`}
                  />
                </Information>
              );
            })}
          </div>
        )}
      </InformationHolder>

      {/* Car Financial Information */}
      <InformationHolder
        styleId="financialInfo"
        data-testid="dummy-purchase-location"
      >
        <TitleH4 value={"Financial Information"} />
        <Information>
          <FinancialInformation
            item={purchasePrice}
            itemHead="Purchased"
            itemDate={purchaseDate}
            itemPercentage={paymentDonePercentage}
            itemLocation={purchaseLocation}
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
