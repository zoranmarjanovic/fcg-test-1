import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import FinancialForm from "../Car/FinancialForm";

import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import { CAR_INFO } from "../Uitls/constants";

const mockStore = configureMockStore();
const store = mockStore({
  carInfo: CAR_INFO
});
function renderWithRedux(ui) {
  return { ...render(<Provider store={store}>{ui}</Provider>) };
}

describe("<Financial Form />", () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  test("Renders 3 Financial options correctly", async () => {
    const { getByTestId } = renderWithRedux(<FinancialForm />);
    const element = getByTestId("financial-form-holder");
    expect(element.children.length).toBe(3);
  });

  test("On submitting financial form calls form submit API", async () => {
    const updateCarData = jest.fn();
    renderWithRedux(<FinancialForm />);
    fireEvent.click(screen.getByTestId("submit-form"));
    // will continue last
  });
});
