import * as React from "react";
import { WordsProvider } from "../../state/words/words.provider";
import GameFieldContainer from "../GameField/GameField";
import { ReactElement } from "react";

import "./App.scss";
import HeaderContainer from "../Header/Header";

function App(): ReactElement {
  return (
    <div className="codenames">
      <WordsProvider>
        <HeaderContainer />
        <GameFieldContainer />
      </WordsProvider>
    </div>
  );
}

export default App;
