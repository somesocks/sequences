"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("./Assert"));
var Drain_1 = __importDefault(require("./Drain"));
var FromArray_1 = __importDefault(require("./FromArray"));
var isPositive = function (val) { return val > 0; };
describe('sequences/FromArray', function () {
    it('test 1', function () {
        FromArray_1.default([1, 2, 3])
            .pipe(Assert_1.default, isPositive)
            .pipe(Drain_1.default)
            .read();
    });
    it('performance test', function () {
        var LARGE_ARRAY = Array(10000).fill(0);
        for (var i = 0; i < 1000; i++) {
            FromArray_1.default(LARGE_ARRAY)
                .pipe(Drain_1.default)
                .read();
        }
    });
    it('performance test control', function () {
        var LARGE_ARRAY = Array(10000).fill(0);
        for (var i = 0; i < 1000; i++) {
            var iterator = LARGE_ARRAY[Symbol.iterator]();
            var val = iterator.next();
            while (!val.done) {
                val = iterator.next();
            }
        }
    });
});
