"use strict";
/* eslint-env node, mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Each_1 = __importDefault(require("../Each"));
var Slice_1 = __importDefault(require("../Slice"));
var Drain_1 = __importDefault(require("../Drain"));
var RandomBoolean_1 = __importDefault(require("./RandomBoolean"));
describe('sequences/random/RandomBoolean', function () {
    it('test 1', function () {
        RandomBoolean_1.default()
            .pipe(Slice_1.default, 0, 19)
            .pipe(Each_1.default, console.log)
            .pipe(Drain_1.default)
            .read();
    });
    it('performance 1', function () {
        RandomBoolean_1.default()
            .pipe(Slice_1.default, 1, 1000000)
            // .pipe(Slice, 1, 10)
            .pipe(Drain_1.default)
            .read();
    });
});
