import * as React from "react";
import { ReactElement } from "react";
import classnames from "classnames";

import { TYPES } from "../../api/constants";
import "./WordCard.scss";

export type WordCardProps = {
  value: string;
  type: TYPES;
  isPicked: boolean;
  index: number;
  onClick: () => void | null;
  id?: string;
  showType?: boolean;
};

function WordCard(props: WordCardProps): ReactElement {
  console.log("rendered");
  const DEFAULT_CLASS = "game-field__word-card";
  const GAME_OVER_LABEL = "GAME OVER";

  const { value, type, isPicked, index, onClick, showType } = props;
  const showWord = !isPicked && value.toUpperCase();
  const showGameOver = isPicked && type === TYPES.BLACK && GAME_OVER_LABEL;
  const valueToDisplay = showWord || showGameOver || null;

  const cardClassnames = classnames({
    [DEFAULT_CLASS]: true,
    [`${DEFAULT_CLASS}--guess`]: !isPicked && !showType,
    [`${DEFAULT_CLASS}--${type}`]: isPicked || showType,
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
