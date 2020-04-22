import * as React from "react";
import { ReactElement } from "react";
import classnames from "classnames";

import { TYPES } from "../../api/constants";
import "./WordCard.scss";

export type WordCardProps = {
  word: string;
  type: TYPES;
  isPicked: boolean;
  index: number;
  onClick: () => void;
  id?: string;
};

function WordCard(props: WordCardProps): ReactElement {
  const DEFAULT_CLASS = "game-field__word-card";
  const GAME_OVER_LABEL = "GAME OVER";

  const { word, type, isPicked, index, onClick } = props;
  const showWord = !isPicked && word.toUpperCase();
  const showGameOver = isPicked && type === TYPES.BLACK && GAME_OVER_LABEL;
  const valueToDisplay = showWord || showGameOver || null;

  const cardClassnames = classnames({
    [DEFAULT_CLASS]: true,
    [`${DEFAULT_CLASS}--guess`]: !isPicked,
    [`${DEFAULT_CLASS}--${type}`]: isPicked,
    [`${DEFAULT_CLASS}--spy-man`]: isPicked && type !== TYPES.BLACK && index % 2 === 0,
    [`${DEFAULT_CLASS}--spy-woman`]: isPicked && type !== TYPES.BLACK && index % 2 === 1,
    [`${DEFAULT_CLASS}--spy-black`]: isPicked && type === TYPES.BLACK,
  });

  return (
    <div onClick={onClick} className={cardClassnames}>
      <div className={`${DEFAULT_CLASS}__number`}>
        <span>{index}</span>
      </div>
      {valueToDisplay && (
        <div className={`${DEFAULT_CLASS}__word`}>
          <span>{valueToDisplay}</span>
        </div>
      )}
    </div>
  );
}

export default WordCard;