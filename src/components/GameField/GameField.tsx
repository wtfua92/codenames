import * as React from "react";
import { ReactElement } from "react";
import "./GameField.scss";

type GameFieldProps = {
  wordCards: ReactElement[];
};

function GameField({ wordCards }: GameFieldProps): ReactElement {
  return <div className="game-field">{wordCards}</div>;
}

export default GameField;
