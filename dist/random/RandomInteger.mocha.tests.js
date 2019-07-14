"use strict";
/* eslint-env node, mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Slice_1 = __importDefault(require("../Slice"));
var Drain_1 = __importDefault(require("../Drain"));
var RandomInteger_1 = __importDefault(require("./RandomInteger"));
describe('sequences/random/RandomInteger', function () {
    it('test 1', function () {
        RandomInteger_1.default(0, 3)
            .pipe(Slice_1.default, 0, 9)
            // .pipe(Each, console.log)
            .pipe(Drain_1.default)
            .read();
    });
    it('performance 1', function () {
        RandomInteger_1.default()
            .pipe(Slice_1.default, 1, 1000000)
            .pipe(Drain_1.default)
            .read();
    });
});
