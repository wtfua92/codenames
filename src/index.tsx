import * as React from "react";
import * as ReactDOM from "react-dom";
import GameFieldContainer from "./components/GameField/GameField";
import { WordsProvider } from "./state/words/words.provider";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <WordsProvider>
      <GameFieldContainer />
    </WordsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
