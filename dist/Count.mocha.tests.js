"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("./Assert"));
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
var Drain_1 = __importDefault(require("./Drain"));
var isPositive = function (val) { return val > 0; };
describe('sequences/Count', function () {
    it('test 1', function () {
        Count_1.default()
            .pipe(Assert_1.default, function (val) { return Number.isInteger(val); })
            .pipe(Slice_1.default, 0, 9)
            .pipe(Assert_1.default, function (val) { return Number.isInteger(val); })
            .pipe(Drain_1.default)
            .read();
    });
    it('performance 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 1, 10000000)
            .pipe(Drain_1.default)
            .read();
    });
});
