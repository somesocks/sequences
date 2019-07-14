"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
var From_1 = __importDefault(require("./From"));
var Drain_1 = __importDefault(require("./Drain"));
var ToArray_1 = __importDefault(require("./ToArray"));
var FromBlocks_1 = __importDefault(require("./FromBlocks"));
var ToBlocks_1 = __importDefault(require("./ToBlocks"));
describe('sequences.FromBlocks', function () {
    it('test 1', function () {
        var result = Count_1.default()
            .pipe(Slice_1.default, 0, 100)
            .pipe(ToBlocks_1.default, 10)
            .pipe(FromBlocks_1.default)
            .pipe(Drain_1.default)
            .read();
    });
    it('test 2', function () {
        var result = From_1.default([1, 2, 3], [4, 5, 6])
            .pipe(FromBlocks_1.default)
            .pipe(ToArray_1.default)
            .read();
    });
    it('performance 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 0, 1000000)
            .pipe(ToBlocks_1.default, 10)
            .pipe(FromBlocks_1.default)
            .pipe(Drain_1.default)
            .read();
    });
});
