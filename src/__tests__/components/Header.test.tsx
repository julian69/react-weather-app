import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "utils/testRender";
import Header from "components/Header";
// import { setCity } from "redux/slices/weather";

jest.mock("@devexpress/dx-react-chart-material-ui");

describe("<Header />", () => {
  it("Renders <Header /> component correctly", () => {
    render(<Header />);
    expect(screen.getByText(/Weather App/i)).toBeInTheDocument();
  });

  it("should set the temp type", () => {
    render(<Header />);
    const switchEl = screen.getByTestId("switch");
    expect(switchEl).toBeInTheDocument();
    fireEvent.click(switchEl);
    expect(screen.getByTestId(/f-active/i)).toBeInTheDocument();
  });
});
