export const carInfoQueryParams = `
    id
    make
    model
    trim
    engineType
    physicalStatus
    legalStatus
    sellingStatus
    financialDetails {
        purchasePrice
        purchaseDate
        purchaseLocation
        paymentDonePercentage
        sellingPrice
        sellingDate
        sellingLocation
        sellingDonePercentage
        margin
}`;
