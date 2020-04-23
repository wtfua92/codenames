import * as React from "react";
import { ReactElement, useEffect, useState } from "react";
import "./GameField.scss";
import { getMockWords } from "../../utils/helpers";
import WordCard, { WordCardProps } from "../WordCard/WordCard";

export function GameField({ children }): ReactElement {
  return <div className="game-field">{children}</div>;
}

type WordCardPropsWithId = WordCardProps & { id: string };

function GameFieldContainer(): ReactElement {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const mockWords = getMockWords();
    const wordCardProps: WordCardPropsWithId[] = mockWords.map((w, i) => ({
      ...w,
      index: i + 1,
      isPicked: false,
      onClick: null,
    }));

    setWords(wordCardProps);
  }, []);

  const wordCardHandler = (index: number) => (): void => {
    setWords(
      words.map((word, i) => {
        if (i === index) {
          return { ...word, isPicked: true };
        }
        return word;
      })
    );
  };

  const wordCards = words.map(({ id, ...word }, i) => {
    return <WordCard key={id} {...word} onClick={wordCardHandler(i)} />;
  });

  return <GameField>{wordCards}</GameField>;
}

export default GameFieldContainer;
