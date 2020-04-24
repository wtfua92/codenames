import * as React from "react";
import { ReactElement } from "react";

import { useWords } from "../../state/words/words.provider";

import "./Header.scss";

type HeaderProps = {
  showGameSchemeHandler: () => void;
};

// TODO: Change button text to icon and add title

export function Header({ showGameSchemeHandler }: HeaderProps): ReactElement {
  return (
    <div className="header">
      <h2 className="header__title">Codenames</h2>
      <div className="header__show-types-btn">
        <button type="button" onClick={showGameSchemeHandler}>
          Show game scheme
        </button>
      </div>
    </div>
  );
}

function HeaderContainer(): ReactElement {
  const { showTypes } = useWords();

  return <Header showGameSchemeHandler={showTypes} />;
}

export default HeaderContainer;
