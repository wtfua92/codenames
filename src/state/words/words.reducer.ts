import { StateWord, WORD_ACTION, WordActionsType } from "./words.actions";
import { action } from "@storybook/addon-actions";

export interface WordsState {
  words: StateWord[];
}

function wordsReducer(state: WordsState, action: WordActionsType): WordsState {
  switch (action.type) {
    case WORD_ACTION.SET_WORDS: {
      const { words } = action.payload;
      return {
        ...state,
        words,
      };
    }
    case WORD_ACTION.UNPICK_WORDS: {
      return {
        ...state,
        words: state.words.map((w) => ({ ...w, isPicked: false })),
      };
    }
    case WORD_ACTION.PICK_WORD: {
      const { words } = state;
      const { cardIndex } = action.payload;

      words[cardIndex] = {
        ...words[cardIndex],
        isPicked: true,
      };

      return {
        ...state,
        words,
      };
    }
    case WORD_ACTION.SHOW_TYPES: {
      return {
        ...state,
        words: state.words.map((w) => ({ ...w, showType: !w.showType })),
      };
    }
    /* istanbul ignore next */
    default: {
      return state;
    }
  }
}

export default wordsReducer;
