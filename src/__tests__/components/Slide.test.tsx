import React from "react";
import { screen } from "@testing-library/react";
import { render } from "utils/testRender";
import Slide from "components/Slide";
import { listSingle } from "../../utils/mocks/weather";

describe("<Slide />", () => {
  it("Renders <Slide /> component correctly", () => {
    render(<Slide slide={listSingle.list} />);
    expect(screen.getByTestId(/slide/i)).toBeInTheDocument();
  });
});
