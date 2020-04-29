import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import { Header } from "./Header";

const getRenderedElement = (showTypesAction = (): null => null): RenderResult =>
  render(<Header showGameSchemeHandler={showTypesAction} />);

describe("<Header />", () => {
  it("should render title", () => {
    const { getByText } = getRenderedElement();
    expect(getByText("Codenames")).toBeDefined();
  });

  it("should render Show game scheme button", () => {
    const { getByTitle } = getRenderedElement();
    expect(getByTitle("Show game scheme")).toBeDefined();
  });

  it("Show game scheme button should trigger handler function on click", () => {
    const handlerMock = jest.fn();
    const { getByTitle } = getRenderedElement(handlerMock);
    const button = getByTitle("Show game scheme");
    fireEvent.click(button);

    expect(handlerMock.mock.calls.length).toBe(1);
  });
});
