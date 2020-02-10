export const CAR_INFO = {
  id: "007",
  make: "mazda",
  model: "mazdaModal",
  trim: "mazdaTrim",
  engineType: "engineTypeDummy",
  physicalStatus: "physicalStatusDummy",
  legalStatus: "legalStatusDummy",
  sellingStatus: "sellingStatusDummy",
  financialDetails: {
    purchasePrice: "101",
    purchaseDate: "",
    purchaseLocation: "dummyPurchaseLocation",
    paymentDonePercentage: "102",
    sellingPrice: "103",
    sellingDate: "",
    sellingLocation: "dummySellingLocation",
    sellingDonePercentage: "104",
    margin: "105"
  }
};

export const TASK_MOCK_DATA = [
  {
    id: "1234",
    taskType: "ADD_DOCUMENT",
    comment: "comment1",
    completed: true
  },
  {
    id: "5678",
    taskType: "WASH_CAR",
    comment: "comment2",
    completed: false
  },
  {
    id: "91011",
    taskType: "ADD_PAYMENT_DETAILS",
    comment: "comment3",
    completed: true
  }
];
