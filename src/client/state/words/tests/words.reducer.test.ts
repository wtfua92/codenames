import wordsReducer, { WordsState } from "../words.reducer";
import wordsActions from "../words.actions";
import { StateWord } from "../words.actions";
import { TYPES } from "../../../../shared/api/constants";

const testWord: StateWord = {
  value: "test",
  id: "id",
  showType: false,
  isPicked: false,
  type: TYPES.RED,
  index: 1,
};

const getTestWordsState = (length: number): StateWord[] =>
  new Array(length).fill(null).map((_, index) => {
    return {
      ...testWord,
      id: testWord.id + index,
      index: index + 1,
    };
  });

let initialState: WordsState;

describe("wordsReducer", () => {
  beforeEach(() => {
    initialState = {
      words: getTestWordsState(5),
    };
  });

  it("should set new words", () => {
    const newStateWords = getTestWordsState(7);
    const action = wordsActions.setWords(newStateWords);
    const newState = wordsReducer(initialState, action);

    expect(newState.words).toEqual(newStateWords);
  });

  it("should change isPicked property of particular word", () => {
    const action = wordsActions.pickWord(2);
    const newState = wordsReducer(initialState, action);

    expect(newState.words[2].isPicked).toBe(true);
  });

  it("should unpick all words", () => {
    const action = wordsActions.unpickWords();
    initialState.words.map((w) => ({ ...w, isPicked: true }));

    const newState = wordsReducer(initialState, action);
    const pickedWordsLength = newState.words.filter(({ isPicked }) => isPicked === true).length;

    expect(pickedWordsLength).toBe(0);
  });

  it("should show type of all words", () => {
    const action = wordsActions.showTypes();
    const newState = wordsReducer(initialState, action);
    const wordsWithShowTypeLength = newState.words.filter(({ showType }) => showType === true)
      .length;
    const wordsWithoutShowTypeLength = newState.words.filter(({ showType }) => showType === false)
      .length;

    expect(wordsWithShowTypeLength).toEqual(newState.words.length);
    expect(wordsWithoutShowTypeLength).toEqual(0);
  });

  it("should hide type of all words", () => {
    const action = wordsActions.showTypes();
    const newState = wordsReducer(initialState, action);
    const finalState = wordsReducer(newState, action);

    const wordsWithShowTypeLength = finalState.words.filter(({ showType }) => showType === true)
      .length;
    const wordsWithoutShowTypeLength = finalState.words.filter(({ showType }) => showType === false)
      .length;

    expect(wordsWithoutShowTypeLength).toEqual(finalState.words.length);
    expect(wordsWithShowTypeLength).toEqual(0);
  });
});
