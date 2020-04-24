import * as React from "react";
import { action } from "@storybook/addon-actions";

import { Header } from "./Header";
import { ReactElement } from "react";

export default {
  title: "Header",
  component: Header,
};

export const HeaderStory = (): ReactElement => (
  <Header showGameSchemeHandler={action("show types")} />
);
