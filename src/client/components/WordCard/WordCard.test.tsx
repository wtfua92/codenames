import * as React from "react";
import { render } from "@testing-library/react";
import WordCard, { WordCardProps } from "./WordCard";
import { wordCardData } from "./WordCard.stories";

let defaultProps: WordCardProps;
const getRenderedElement = (props: WordCardProps = defaultProps) => render(<WordCard {...props} />);

describe("<WordCard/>", () => {
  beforeEach(() => {
    defaultProps = wordCardData;
  });

  it("should display a regular guess word card", () => {
    const { queryByText } = getRenderedElement();
    expect(queryByText(defaultProps.value)).toBeDefined();
  });

  it("should not display the word if the card was picked", () => {
    const { queryByText } = getRenderedElement({
      ...defaultProps,
      isPicked: true,
    });
    expect(queryByText(defaultProps.value)).toBeFalsy();
  });

  it("should display the number of a card", () => {
    const { queryByText } = getRenderedElement();
    expect(queryByText(defaultProps.index.toString())).toBeDefined();
  });
});
