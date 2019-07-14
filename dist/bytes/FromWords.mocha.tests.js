"use strict";
/* eslint-env node, mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Each_1 = __importDefault(require("../Each"));
var Drain_1 = __importDefault(require("../Drain"));
var From_1 = __importDefault(require("../From"));
var FromWords_1 = __importDefault(require("./FromWords"));
describe('sequences/bytes/FromWords', function () {
    it('little-endian test', function () {
        From_1.default(0x01234567)
            .pipe(Each_1.default, console.log)
            .pipe(FromWords_1.default)
            .pipe(Each_1.default, console.log)
            .pipe(Drain_1.default)
            .read();
    });
    it('big-endian test', function () {
        From_1.default(0x01234567)
            .pipe(FromWords_1.default, false)
            .pipe(Each_1.default, console.log)
            .pipe(Drain_1.default)
            .read();
    });
});
