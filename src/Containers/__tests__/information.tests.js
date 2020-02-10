import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "../Car/Information";
import { CAR_INFO } from "../Uitls/constants";

const mockStore = configureMockStore();
const store = mockStore({
  carInfo: CAR_INFO
});
function renderWithRedux(ui) {
  return { ...render(<Provider store={store}>{ui}</Provider>) };
}

describe("<Information />", () => {
  const mockStore = configureMockStore();

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it("Renders financial information", async () => {
    const { getByText } = renderWithRedux(<App />);
    expect(getByText(/101/i)).toBeTruthy();
    expect(getByText(/dummyPurchaseLocation/i)).toBeTruthy();
    expect(getByText(/102/i)).toBeTruthy();
    expect(getByText(/dummySellingLocation/i)).toBeTruthy();
  });

  test("Renders 3 Status options", async () => {
    const { getByTestId } = renderWithRedux(<App />);

    const element = getByTestId("status-holder");
    expect(element.children.length).toBe(3);
  });

  test("Values renders successfully under information Status dropdown", async () => {
    const { getByDisplayValue } = renderWithRedux(<App />);
    expect(getByDisplayValue(/physicalStatusDummy/i)).toBeTruthy();
    expect(getByDisplayValue(/legalStatusDummy/i)).toBeTruthy();
    expect(getByDisplayValue(/sellingStatusDummy/i)).toBeTruthy();
  });
});
