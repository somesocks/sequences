"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-env mocha */
var Assert_1 = __importDefault(require("./Assert"));
var Drain_1 = __importDefault(require("./Drain"));
var Each_1 = __importDefault(require("./Each"));
var From_1 = __importDefault(require("./From"));
var Join_1 = __importDefault(require("./Join"));
var ToArray_1 = __importDefault(require("./ToArray"));
describe('sequences/Join', function () {
    it('handles two arrays of numbers', function () {
        var result = Join_1.default([1, 2, 3], [4, 5, 6])
            // .pipe(Each, (item) => console.log('item', item))
            .pipe(ToArray_1.default)
            .pipe(Each_1.default, function (item) { return console.log('item', item); })
            .pipe(Assert_1.default, function (results) { return results.length === 9; })
            .read();
    });
    it('handles empty arrays correctly', function () {
        var result = Join_1.default([], [])
            // .pipe(Each, (item) => console.log('item', item))
            .pipe(ToArray_1.default)
            .pipe(Assert_1.default, function (results) { return results.length === 0; })
            .read();
    });
    it('handles sequences correctly', function () {
        var result = Join_1.default(From_1.default(1, 2, 3), From_1.default(4, 5, 6))
            // .pipe(Each, (item) => console.log('item', item))
            .pipe(ToArray_1.default)
            .pipe(Assert_1.default, function (results) { return results.length === 9; })
            .read();
    });
    var PERF_ARRAY = Array(10000).fill(0);
    it('performance', function () {
        var result = Join_1.default(PERF_ARRAY, PERF_ARRAY)
            // .pipe(Each, (item) => console.log('item', item))
            .pipe(Drain_1.default)
            .read();
    });
    it('performance control group', function () {
        var arr = [];
        for (var i = 0; i < PERF_ARRAY.length; i++) {
            for (var j = 0; j < PERF_ARRAY.length; j++) {
                arr[0] = PERF_ARRAY[i];
                arr[1] = PERF_ARRAY[j];
            }
        }
    });
});
