// Exporting if TS being used
export const PHYSICAL_STATUS = [
  { label: "At owner", value: "AT_OWNER" },
  { label: "At buyer", value: "AT_BUYER" },
  { label: "At our location", value: "AT_OUR_LOCATION" }
];

export const LEGAL_STATUS = [
  { label: "Owner", value: "OWNER" },
  { label: "US", value: "US" },
  { label: "Buyer", value: "BUYER" }
];

export const SELLING_STATUS = [
  { label: "Available", value: "AVAILABLE" },
  { label: "Pending", value: "PENDING" },
  { label: "Sold", value: "SOLD" },
  { label: "Reserved", value: "RESERVED" }
];

export const ENGINE_TYPE = [
  { label: "Vee", value: "VEE" },
  { label: "Inline", value: "INLINE" },
  { label: "Boxer", value: "BOXER" },
  { label: "Rotary", value: "ROTARY" }
];

export const STATUS_DROP_DOWN = [
  {
    key: "physicalStatus",
    options: PHYSICAL_STATUS,
    title: "Physical Status"
  },
  {
    key: "legalStatus",
    options: LEGAL_STATUS,
    title: "Legal Status"
  },
  {
    key: "sellingStatus",
    options: SELLING_STATUS,
    title: "Seller Status"
  }
];

export const CAR_INFO_NAME_MAP = {
  AT_OWNER: "At owner",
  AT_BUYER: "At buyer",
  AT_OUR_LOCATION: "At our location",
  OWNER: "Owner",
  US: "Us",
  BUYER: "Buyer",
  AVAILABLE: "Available",
  PENDING: "Pending",
  SOLD: "Sold",
  RESERVED: "Reserved",
  VEE: "Vee",
  INLINE: "Inline",
  BOXER: "Boxer",
  ROTARY: "Rotary"
};
