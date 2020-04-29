import React, { ReactElement } from "react";
import { useCallback, useMemo, createContext, useReducer, useContext } from "react";
import wordsReducer, { WordsState } from "./words.reducer";
import wordsActions, { StateWord, WordActionsType } from "./words.actions";

type ReactDispatchWordActionsType = React.Dispatch<WordActionsType>;
type UseWordsContextType = [WordsState, ReactDispatchWordActionsType];

const init = (): WordsState => ({
  words: [],
});

const WordsContext = createContext<UseWordsContextType | undefined>(undefined);

function WordsProvider(props: { children: ReactElement | ReactElement[] }): React.ReactElement {
  const [state, dispatch] = useReducer(wordsReducer, [], init) as [
    WordsState,
    ReactDispatchWordActionsType
  ];
  const value = useMemo<[WordsState, ReactDispatchWordActionsType]>(() => [state, dispatch], [
    state,
  ]);
  return <WordsContext.Provider value={value}>{props.children}</WordsContext.Provider>;
}

export interface UseWordsInterface {
  getWords: () => StateWord[];
  pickItem: (cardIndex: number) => void;
  setWords: (words: StateWord[]) => void;
  unpickWords: () => void;
  showTypes: () => void;
}

function useWords(): UseWordsInterface {
  const context = useContext(WordsContext);
  if (!context) {
    throw new Error("useWords must be used within a WordsContext");
  }
  const [state, dispatch] = context;
  const getWords = (): StateWord[] => state.words;
  const pickItem = useCallback(
    (cardIndex: number): void => dispatch(wordsActions.pickWord(cardIndex)),
    [dispatch]
  );
  const setWords = useCallback(
    (words: StateWord[]): void => dispatch(wordsActions.setWords(words)),
    [dispatch]
  );
  const unpickWords = useCallback((): void => dispatch(wordsActions.unpickWords()), [dispatch]);
  const showTypes = useCallback((): void => dispatch(wordsActions.showTypes()), [dispatch]);

  return {
    getWords,
    pickItem,
    setWords,
    unpickWords,
    showTypes,
  };
}

export { useWords, WordsProvider };
