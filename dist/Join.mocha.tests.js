"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Join_1 = __importDefault(require("./Join"));
var Drain_1 = __importDefault(require("./Drain"));
var Each_1 = __importDefault(require("./Each"));
describe('sequences/Join', function () {
    it('joins two array of numbers', function () {
        var result = Join_1.default([1, 2, 3], [4, 5, 6])
            .pipe(Each_1.default, function (item) { return console.log('item', item); })
            .pipe(Drain_1.default)
            .read();
    });
});
