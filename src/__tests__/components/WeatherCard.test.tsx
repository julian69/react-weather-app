import React from "react";
import { screen } from "@testing-library/react";
import { render } from "utils/testRender";
import WeatherCard from "components/WeatherCard";
import { listSingle } from "../../utils/mocks/weather";

describe("<WeatherCard />", () => {
  it("Renders <WeatherCard /> component correctly", () => {
    render(<WeatherCard data={listSingle.list[0]} />);
    expect(screen.getByText(/10°/i)).toBeInTheDocument();
    expect(screen.getByText(/L: 10 H: 11/i)).toBeInTheDocument();
    expect(screen.getByText(/Clear, clear sky/i)).toBeInTheDocument();
    expect(screen.getByText(/23 Apr 2021/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Weather/i)).toBeInTheDocument();
  });
});
