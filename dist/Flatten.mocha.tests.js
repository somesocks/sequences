"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("./Assert"));
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
var From_1 = __importDefault(require("./From"));
var Drain_1 = __importDefault(require("./Drain"));
var ToArray_1 = __importDefault(require("./ToArray"));
var Flatten_1 = __importDefault(require("./Flatten"));
var Group_1 = __importDefault(require("./Group"));
describe('sequences/Flatten', function () {
    it('test 1', function () {
        var result = Count_1.default()
            .pipe(Slice_1.default, 0, 100)
            .pipe(Group_1.default, 10)
            .pipe(Flatten_1.default)
            .pipe(Drain_1.default)
            .read();
    });
    it('test 2', function () {
        var result = From_1.default([1, 2, 3], [4, 5, 6])
            .pipe(Flatten_1.default)
            .pipe(ToArray_1.default)
            .read();
    });
    it('empty arrays work correctly', function () {
        var result = From_1.default([], [], [1, 2, 3], [], [])
            .pipe(Flatten_1.default)
            .pipe(ToArray_1.default)
            .pipe(Assert_1.default, function (res) { return res.length === 3; })
            .pipe(Assert_1.default, function (res) { return res[0] === 1; })
            .pipe(Assert_1.default, function (res) { return res[1] === 2; })
            .pipe(Assert_1.default, function (res) { return res[2] === 3; })
            .read();
    });
    it('performance 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 0, 1000000)
            .pipe(Group_1.default, 10)
            .pipe(Flatten_1.default)
            .pipe(Drain_1.default)
            .read();
    });
});
