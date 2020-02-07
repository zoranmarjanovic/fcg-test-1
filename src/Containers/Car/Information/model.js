// Exporting if TS being used
export const PhysicalStatus = [
  { label: "At owner", value: "AT_OWNER" },
  { label: "At buyer", value: "AT_BUYER" },
  { label: "At our location", value: "AT_OUR_LOCATION" }
];

export const LegalStatus = [
  { label: "Owner", value: "OWNER" },
  { label: "US", value: "US" },
  { label: "Buyer", value: "BUYER" }
];

export const SellingStatus = [
  { label: "Available", value: "AVAILABLE" },
  { label: "Pending", value: "PENDING" },
  { label: "Sold", value: "SOLD" },
  { label: "Reserved", value: "RESERVED" }
];

export const EngineType = [
  { label: "Vee", value: "VEE" },
  { label: "Inline", value: "INLINE" },
  { label: "Boxer", value: "BOXER" },
  { label: "Rotary", value: "ROTARY" }
];

export const StatusDropDown = [
  {
    key: "physicalStatus",
    options: PhysicalStatus,
    title: "Physical Status"
  },
  {
    key: "legalStatus",
    options: LegalStatus,
    title: "Legal Status"
  },
  {
    key: "sellingStatus",
    options: SellingStatus,
    title: "Seller Status"
  }
];

export const carInfoModel = {
  id: "",
  make: "",
  model: "",
  trim: "",
  financialDetails: {
    purchasePrice: "",
    purchaseDate: "",
    purchaseLocation: "",
    paymentDonePercentage: "",
    sellingPrice: "",
    sellingDate: "",
    sellingLocation: "",
    sellingDonePercentage: "",
    margin: ""
  }
};
