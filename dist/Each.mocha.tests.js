"use strict";
/* eslint-env node, mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
var Drain_1 = __importDefault(require("./Drain"));
var Each_1 = __importDefault(require("./Each"));
describe('sequences/Each', function () {
    it('test 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 0, 4)
            .pipe(Each_1.default, function () { return null; })
            .pipe(Drain_1.default)
            .read();
    });
    it('performance 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 1, 10000000)
            .pipe(Each_1.default, function () { return null; })
            .pipe(Drain_1.default)
            .read();
    });
});
