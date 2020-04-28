import WordCreator from "../api/classes/Word.class";
import { Word } from "../api/classes/Word.class";
import words from "./data.json";

export const getMockWords = (): Word[] => {
  const wordCreator = new WordCreator();
  return (words as string[]).slice(0, 25).map((word, index) => {
    if (index >= 7 && index < 16) {
      return wordCreator.createRedWord(word);
    }
    if (index >= 16 && index < 24) {
      return wordCreator.createBlueWord(word);
    }
    if (index === 24) {
      return wordCreator.createBlackWord(word);
    }
    return wordCreator.createNeutralWord(word);
  });
};
