/* eslint-disable react/prop-types */
import { Provider } from "react-redux";
import store from "redux/store";
import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

const AllTheProviders: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
