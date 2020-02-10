import React from "react";
import { render } from "@testing-library/react";
import Header from "../../Components/Header/index";

describe("<Header />", () => {
  test("renders learn react link", () => {
    const { queryByText } = render(<Header />);
    expect(queryByText("FCG coding challenge")).toBeDefined();
  });
});
