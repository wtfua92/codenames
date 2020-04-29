"use strict";
exports.__esModule = true;
var Word_class_1 = require("../api/classes/Word.class");
exports.getMockWords = function (words) {
    var wordCreator = new Word_class_1["default"]();
    return words.slice(0, 25).map(function (word, index) {
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
