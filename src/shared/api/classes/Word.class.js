"use strict";
exports.__esModule = true;
var shortid = require("shortid");
var constants_1 = require("../constants");
var Word = /** @class */ (function () {
    function Word(value, type) {
        this.value = value;
        this.type = type;
        this.id = shortid.generate();
    }
    return Word;
}());
exports.Word = Word;
var WordCreator = /** @class */ (function () {
    function WordCreator() {
    }
    WordCreator.prototype.createRedWord = function (value) {
        return new Word(value, constants_1.TYPES.RED);
    };
    WordCreator.prototype.createBlueWord = function (value) {
        return new Word(value, constants_1.TYPES.BLUE);
    };
    WordCreator.prototype.createBlackWord = function (value) {
        return new Word(value, constants_1.TYPES.BLACK);
    };
    WordCreator.prototype.createNeutralWord = function (value) {
        return new Word(value, constants_1.TYPES.NEUTRAL);
    };
    return WordCreator;
}());
exports["default"] = WordCreator;
