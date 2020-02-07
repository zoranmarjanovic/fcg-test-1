import React from "react";
import { render } from "@testing-library/react";
import Header from "../index";

test("renders learn react link", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/FCG coding challenge/i);
  expect(linkElement).toBeInTheDocument();
});
