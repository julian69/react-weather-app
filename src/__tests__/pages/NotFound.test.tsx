import React from "react";
import { screen } from "@testing-library/react";
import { render } from "utils/testRender";
import NotFound from "pages/NotFound";

describe("<NotFound />", () => {
  it("Renders <NotFound /> component correctly", () => {
    render(<NotFound />);
    expect(
      screen.getByText(/Ups... Something went wrong./i)
    ).toBeInTheDocument();
  });
});
