"use strict";
/* eslint-env node, mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Each_1 = __importDefault(require("../Each"));
var Drain_1 = __importDefault(require("../Drain"));
var FromHex_1 = __importDefault(require("./FromHex"));
var ToHex_1 = __importDefault(require("./ToHex"));
describe('sequences/bytes/ToHex', function () {
    it('test 1', function () {
        FromHex_1.default('000102030405060708090a0b0c0d0e0f')
            .pipe(Each_1.default, console.log)
            .pipe(ToHex_1.default)
            .pipe(Each_1.default, console.log)
            .pipe(Drain_1.default)
            .read();
    });
});
