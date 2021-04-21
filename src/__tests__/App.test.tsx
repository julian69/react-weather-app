import React from "react";
import axios from "axios";
import { render, screen, waitForElementToBeRemoved } from "testRender";
import App from "App";

describe("<App />", () => {
  it("should mock axios get", async () => {
    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));

    expect(jest.isMockFunction(axios.get)).toBe(true);
    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(screen.getByText(/Weather/i)).toBeInTheDocument();
  });
});
