import React from "react";
import { screen } from "@testing-library/react";
import { render } from "utils/testRender";
import Weather from "pages/Weather";

jest.mock("@devexpress/dx-react-chart-material-ui");

describe("<Weather />", () => {
  it("Renders <Weather /> component correctly", () => {
    render(<Weather />);
    expect(screen.getByTestId("weather")).toBeInTheDocument();
  });
});
