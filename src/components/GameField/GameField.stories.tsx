import * as React from "react";
import { ReactNode } from "react";
import { action } from "@storybook/addon-actions";

import { getMockWords } from "../../utils/helpers";
import { Word } from "../../api/classes/Word.class";
import WordCard from "../WordCard/WordCard";
import { GameField } from "./GameField";

export default {
  title: "Game Field",
  component: GameField,
  decorators: [(story: () => ReactNode): ReactNode => <div>{story()}</div>],
  excludeStories: /.*Data$/,
};

const transformWordsToCardsData = (words: Word[], picked: boolean) =>
  words.map((w, i) => (
    <WordCard index={i + 1} key={w.id} isPicked={picked} {...w} onClick={action("click")} />
  ));

const unpickedWordData = transformWordsToCardsData(getMockWords(), false);
const pickedWordData = transformWordsToCardsData(getMockWords(), true);

export const GameFieldWithUnpickedWords = (): ReactNode => (
  <GameField>{unpickedWordData}</GameField>
);

export const GameFieldWithPickedWords = (): ReactNode => <GameField>{pickedWordData}</GameField>;
