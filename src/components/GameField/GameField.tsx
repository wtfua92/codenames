import * as React from "react";
import { ReactElement, useEffect } from "react";
import "./GameField.scss";
import { getMockWords } from "../../utils/helpers";
import WordCard from "../WordCard/WordCard";
import { useWords } from "../../state/words/words.provider";
import { StateWord } from "../../state/words/words.actions";

type GameFieldProps = {
  children: React.ReactNode;
  showGameSchemeHandler: () => void;
};

export function GameField({ children, showGameSchemeHandler }: GameFieldProps): ReactElement {
  return (
    <div className="game-field-container">
      <button type="button" onClick={showGameSchemeHandler}>
        Test
      </button>
      <div className="game-field">{children}</div>
    </div>
  );
}

function GameFieldContainer(): ReactElement {
  const { setWords, showTypes, pickItem, getWords } = useWords();

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

  return <GameField showGameSchemeHandler={showTypes}>{wordCards}</GameField>;
}

export default GameFieldContainer;
