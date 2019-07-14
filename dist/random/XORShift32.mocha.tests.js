"use strict";
/* eslint-env node, mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("../Assert"));
var Slice_1 = __importDefault(require("../Slice"));
var Drain_1 = __importDefault(require("../Drain"));
var XORShift32_1 = __importDefault(require("./XORShift32"));
describe('sequences/random/XORShift32', function () {
    it('test 1', function () {
        XORShift32_1.default()
            .pipe(Assert_1.default, function (val) { return Number.isInteger(val); })
            .pipe(Slice_1.default, 0, 99)
            .pipe(Assert_1.default, function (val) { return Number.isInteger(val); })
            // .pipe(Each, console.log)
            .pipe(Drain_1.default)
            .read();
    });
    it('performance 1', function () {
        XORShift32_1.default()
            .pipe(Slice_1.default, 1, 1000000)
            .pipe(Drain_1.default)
            .read();
    });
});
