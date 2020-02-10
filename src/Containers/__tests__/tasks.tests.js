import React from "react";
import { fireEvent, cleanup, render, screen } from "@testing-library/react";
import CarTask from "../Car/Tasks/index";
import { TASK_MOCK_DATA } from "../Uitls/constants";

describe("<CarTask />", () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });
  it("renders 3 task list", async () => {
    const { getByTestId } = render(<CarTask task={TASK_MOCK_DATA} />);
    expect(getByTestId("taskListRender").children.length).toBe(3);
  });

  it("Converts true checkbox to falsy checkbox", () => {
    render(<CarTask task={TASK_MOCK_DATA} />);
    fireEvent.click(screen.getByTestId("1234"));
    expect(screen.getByTestId("1234").checked).toBeFalsy();
  });
});
