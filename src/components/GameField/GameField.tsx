import * as React from "react";
import { ReactElement, useEffect } from "react";

import { getMockWords } from "../../utils/helpers";
import WordCard from "../WordCard/WordCard";
import { useWords } from "../../state/words/words.provider";
import { StateWord } from "../../state/words/words.actions";

import "./GameField.scss";

export type GameFieldProps = {
  children: React.ReactNode;
};

export function GameField({ children }: GameFieldProps): ReactElement {
  return <div className="game-field">{children}</div>;
}

function GameFieldContainer(): ReactElement {
  const { setWords, pickItem, getWords } = useWords();

  useEffect(() => {
    const mockWords = getMockWords();
    const wordCardProps: StateWord[] = mockWords.map((w, i) => ({
      ...w,
      index: i + 1,
      isPicked: false,
      onClick: null,
      showType: false,
    }));

    setWords(wordCardProps);
  }, []);

  const wordCardHandler = (index: number) => (): void => {
    pickItem(index);
  };

  const wordCards = getWords().map(({ id, ...word }, i) => {
    return <WordCard key={id} {...word} onClick={wordCardHandler(i)} />;
  });

  return <GameField>{wordCards}</GameField>;
}

export default GameFieldContainer;
