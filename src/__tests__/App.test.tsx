import App from "App";
import React from "react";
import fetchMock from "fetch-mock";
import { render, screen, waitForElementToBeRemoved } from "utils/testRender";
import weather from "utils/mocks/weather";

describe("<App />", () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it("should show Weather page if API call is fulfilled", async () => {
    fetchMock.mock(process.env.REACT_APP_WEATHER_API || "", {
      body: { data: weather },
      headers: { "content-type": "application/json" },
    });
    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    expect(screen.getByText(/Weather/i)).toBeInTheDocument();
  });

  it("should show Load page if API call is pending", async () => {
    fetchMock.mock(process.env.REACT_APP_WEATHER_API || "", {
      body: [{}],
      headers: { "content-type": "application/json" },
    });
    render(<App />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should show Weather page if API call is rejected", async () => {
    fetchMock.mock(process.env.REACT_APP_WEATHER_API || "", 404);
    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
  });
});
