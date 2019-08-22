"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("./Assert"));
var From_1 = __importDefault(require("./From"));
var ToArray_1 = __importDefault(require("./ToArray"));
var Sort_1 = __importDefault(require("./Sort"));
describe('sequences/Sort', function () {
    it('test case 1', function () {
        From_1.default(3, 2, 1, 0)
            // .pipe(Each, console.log)
            .pipe(Sort_1.default)
            // .pipe(Each, console.log)
            .pipe(ToArray_1.default)
            // .pipe(Each, console.log)
            .pipe(Assert_1.default, function (val) { return val.length === 4; })
            .pipe(Assert_1.default, function (val) { return val[0] === 0; })
            .pipe(Assert_1.default, function (val) { return val[1] === 1; })
            .pipe(Assert_1.default, function (val) { return val[2] === 2; })
            .pipe(Assert_1.default, function (val) { return val[3] === 3; })
            .read();
    });
});
