import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "utils/testRender";
import CityPicker from "components/CityPicker";

describe("<CityPicker />", () => {
  it("should render properly and set a selected city", () => {
    render(<CityPicker />);
    const select = screen.getByLabelText("City");
    expect(select).toBeInTheDocument();

    fireEvent.click(screen.getByText("Berlin"));

    fireEvent.change(select, { target: { value: "Berlin" } });
    const options = screen.getAllByTestId(
      "select-option"
    ) as HTMLOptionElement[];

    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
    expect(options[3].selected).toBeFalsy();
  });
});
