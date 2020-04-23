import * as React from "react";
import * as ReactDOM from "react-dom";
import GameFieldContainer from "./components/GameField/GameField";

import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <GameFieldContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
