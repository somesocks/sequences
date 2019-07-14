"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
var Drain_1 = __importDefault(require("./Drain"));
var Filter_1 = __importDefault(require("./Filter"));
describe('sequences.Filter', function () {
    it('test case 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 0, 50)
            .pipe(Filter_1.default, function (val) { return (val % 10 === 0); })
            // .pipe(Each, console.log)
            .pipe(Drain_1.default)
            .read();
    });
    it('performance test', function () {
        Count_1.default()
            .pipe(Slice_1.default, 0, 10000000)
            .pipe(Filter_1.default, function (val, i) { return (val % 2 === 0); })
            .pipe(Filter_1.default, function (val, i) { return (val % 3 === 0); })
            .pipe(Filter_1.default, function (val, i) { return (val % 5 === 0); })
            .pipe(Filter_1.default, function (val, i) { return (val % 7 === 0); })
            .pipe(Slice_1.default, 1, 100)
            // .pipe(ToArray)
            .pipe(Drain_1.default)
            .read();
    });
    it('performance test control group', function () {
        var arr = Array(10000000).fill(0);
        arr = arr
            .map(function (v, i) { return i; })
            .filter(function (val) { return val % 2 === 0; })
            .filter(function (val) { return val % 3 === 0; })
            .filter(function (val) { return val % 5 === 0; })
            .filter(function (val) { return val % 7 === 0; });
    });
});
