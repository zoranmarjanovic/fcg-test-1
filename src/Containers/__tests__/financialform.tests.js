import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import FinancialForm from "../Car/FinancialForm";

import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import { CAR_INFO } from "../Uitls/constants";

describe("<Financial Form />", () => {
  const mockStore = configureMockStore();

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  test("Renders 3 Financial options correctly", async () => {
    const store = mockStore({
      carInfo: CAR_INFO
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <FinancialForm />
      </Provider>
    );
    const element = getByTestId("financial-form-holder");
    expect(element.children.length).toBe(3);
  });

  test("On submitting financial form calls form submit API", async () => {
    const store = mockStore({
      carInfo: CAR_INFO
    });

    const updateCarData = jest.fn();

    render(
      <Provider store={store}>
        <FinancialForm />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("submit-form"));
    // will continue last
  });
});
