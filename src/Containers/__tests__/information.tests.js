import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "../Car/Information";
import { CAR_INFO } from "../Uitls/constants";
const mockStore = configureMockStore();

describe("<Information />", () => {
  const mockStore = configureMockStore();

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it("Renders financial information", async () => {
    const store = mockStore({
      carInfo: CAR_INFO
    });
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/101/i)).toBeTruthy();
    expect(getByText(/dummyPurchaseLocation/i)).toBeTruthy();
    expect(getByText(/102/i)).toBeTruthy();
    expect(getByText(/dummySellingLocation/i)).toBeTruthy();
  });

  test("Renders 3 Status options", async () => {
    const store = mockStore({
      carInfo: CAR_INFO
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const element = getByTestId("status-holder");
    expect(element.children.length).toBe(3);
  });

  test("Values renders successfully under information Status dropdown", async () => {
    const store = mockStore({
      carInfo: CAR_INFO
    });

    const { getByDisplayValue } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByDisplayValue(/physicalStatusDummy/i)).toBeTruthy();
    expect(getByDisplayValue(/legalStatusDummy/i)).toBeTruthy();
    expect(getByDisplayValue(/sellingStatusDummy/i)).toBeTruthy();
  });
});
