import * as React from "react";
import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";

import WordCard, { WordCardProps } from "./WordCard";
import { TYPES } from "../../api/constants";

export default {
  title: "WordCard",
  component: WordCard,
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode) => (
      <div
        style={{
          width: "280px",
          height: "135px",
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const wordCardData: WordCardProps = {
  word: "Word",
  index: 1,
  type: TYPES.NEUTRAL,
  isPicked: false,
  onClick: action("click"),
};

const pickedWordCardData: WordCardProps = {
  ...wordCardData,
  isPicked: true,
  type: TYPES.NEUTRAL,
};

export const WordCardGuess = () => <WordCard {...wordCardData} />;

export const WordCardPicked = () => (
  <WordCard
    {...pickedWordCardData}
    index={select("Gender", { woman: 1, man: 2 }, 1)}
    type={select("Type", { ...TYPES }, TYPES.NEUTRAL)}
  />
);
