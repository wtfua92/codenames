import React from "react";
import { render, RenderResult } from "@testing-library/react";
import GameFieldContainer from "./GameField";
import { WordsProvider } from "../../state/words/words.provider";

// TODO: Add a custom renderer with all necessary providers

const getRenderedElement = (): RenderResult =>
  render(
    <WordsProvider>
      <GameFieldContainer />
    </WordsProvider>
  );

describe("<GameFieldContainer />", () => {
  it("should render 25 word cards", () => {
    const { container } = getRenderedElement();
    expect(container.querySelectorAll(".game-field__word-card").length).toEqual(25);
  });
});
