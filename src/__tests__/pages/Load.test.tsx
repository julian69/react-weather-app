import React from "react";
import { screen } from "@testing-library/react";
import { render } from "testRender";
import Load from "pages/Load";

describe("<Load />", () => {
  it("Renders <Load /> component correctly", () => {
    render(<Load />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
