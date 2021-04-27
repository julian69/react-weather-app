import React from "react";
import { screen } from "@testing-library/react";
import { render } from "utils/testRender";
import Degree from "components/Degree";

describe("<Degree />", () => {
  it("Renders <Degree /> component correctly", () => {
    render(<Degree value="test" />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
