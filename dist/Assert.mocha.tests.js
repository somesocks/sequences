"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("./Assert"));
var From_1 = __importDefault(require("./From"));
var Drain_1 = __importDefault(require("./Drain"));
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
var isPositive = function (val) { return val > 0; };
describe('sequences.Assert', function () {
    it('test 1', function () {
        From_1.default(1, 2, 3)
            .pipe(Assert_1.default, isPositive)
            .pipe(Drain_1.default)
            .read();
    });
    it('test 2', function () {
        try {
            From_1.default(1, 2, 3, -1)
                .pipe(Assert_1.default, isPositive)
                .pipe(Drain_1.default)
                .read();
            return false;
        }
        catch (err) {
            return true;
        }
    });
    it('performance 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 1, 10000000)
            .pipe(Assert_1.default, isPositive)
            .pipe(Drain_1.default)
            .read();
    });
});
