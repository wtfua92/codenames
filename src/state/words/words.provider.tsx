import * as React from "react";
import { useCallback, useMemo, createContext, useReducer, useContext } from "react";
import wordsReducer, { WordsState } from "./words.reducer";
import wordsActions, { StateWord, WordActionsType } from "./words.actions";

type ReactDispatchWordActionsType = React.Dispatch<WordActionsType>;

const init = (): WordsState => ({
  words: [],
});

const WordsContext = createContext(null);

function WordsProvider(props): React.ReactElement {
  const [state, dispatch] = useReducer(wordsReducer, [], init);
  const value = useMemo(() => [state, dispatch], [state]);
  return <WordsContext.Provider value={value} {...props} />;
}

export interface UseWordsInterface {
  getWords: () => StateWord[];
  pickItem: (cardIndex: number) => ReactDispatchWordActionsType;
  setWords: (words: StateWord[]) => ReactDispatchWordActionsType;
  unpickWords: () => ReactDispatchWordActionsType;
  showTypes: () => ReactDispatchWordActionsType;
}

function useWords(): UseWordsInterface {
  const context = useContext(WordsContext);
  if (!context) {
    throw new Error("useWords must be used within a WordsContext");
  }
  const [state, dispatch] = context;
  const getWords = (): StateWord[] => state.words;
  const pickItem = useCallback(
    (cardIndex: number): ReactDispatchWordActionsType => dispatch(wordsActions.pickWord(cardIndex)),
    [dispatch]
  );
  const setWords = useCallback(
    (words: StateWord[]): ReactDispatchWordActionsType => dispatch(wordsActions.setWords(words)),
    [dispatch]
  );
  const unpickWords = useCallback(
    (): ReactDispatchWordActionsType => dispatch(wordsActions.unpickWords()),
    [dispatch]
  );
  const showTypes = useCallback(
    (): ReactDispatchWordActionsType => dispatch(wordsActions.showTypes()),
    [dispatch]
  );

  return {
    getWords,
    pickItem,
    setWords,
    unpickWords,
    showTypes,
  };
}

export { useWords, WordsProvider };
