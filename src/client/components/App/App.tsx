import React, { ReactElement } from "react";

import { WordsProvider } from "../../state/words/words.provider";
import GameFieldContainer from "../GameField/GameField";
import HeaderContainer from "../Header/Header";

import "./App.scss";

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
