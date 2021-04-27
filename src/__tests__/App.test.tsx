import App from "App";
import React from "react";
import fetchMock from "fetch-mock";
import { render, screen, waitForElementToBeRemoved } from "utils/testRender";
import { buildWeatherUrl } from "utils/helpers";

jest.mock("@devexpress/dx-react-chart-material-ui");

describe("<App />", () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it("should show Weather page if API call is fulfilled", async () => {
    fetchMock.mock(buildWeatherUrl("Munich"), 200);

    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    expect(screen.getByText(/Weather/i)).toBeInTheDocument();
  });

  it("should show Load page if API call is pending", async () => {
    fetchMock.mock(buildWeatherUrl("Munich"), 202);
    render(<App />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should show Weather page if API call is rejected", async () => {
    fetchMock.mock(buildWeatherUrl("Munich"), 404);

    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    expect(
      screen.getByText(/Ups... Something went wrong./i)
    ).toBeInTheDocument();
  });
});
