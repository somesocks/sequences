"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
var Drain_1 = __importDefault(require("./Drain"));
describe('sequences/Drain', function () {
    it('test 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 0, 9)
            .pipe(Drain_1.default)
            .read();
    });
    it('performance 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 1, 1000000)
            .pipe(Drain_1.default)
            .read();
    });
});
