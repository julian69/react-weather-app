import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "utils/testRender";
import Weather from "pages/Weather";

jest.mock("@devexpress/dx-react-chart-material-ui");

describe("<Weather />", () => {
  it("Renders <Weather /> component correctly", () => {
    render(<Weather />);
    expect(screen.getByTestId("weather")).toBeInTheDocument();
  });

  it("should set a selected city", () => {
    render(<Weather />);
    const select = screen.getByLabelText("City");
    expect(select).toBeInTheDocument();

    fireEvent.click(screen.getByText("Berlin"));

    fireEvent.change(select, { target: { value: "Berlin" } });
    const options = screen.getAllByTestId("select-option");

    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
    expect(options[3].selected).toBeFalsy();
  });
});
