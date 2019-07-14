"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("./Assert"));
var From_1 = __importDefault(require("./From"));
var Drain_1 = __importDefault(require("./Drain"));
var isPositive = function (val) { return val > 0; };
describe('sequences.From', function () {
    it('test 1', function () {
        From_1.default(1, 2, 3)
            .pipe(Assert_1.default, isPositive)
            .pipe(Drain_1.default)
            .read();
    });
});
