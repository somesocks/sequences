"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("./Assert"));
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
var Filter_1 = __importDefault(require("./Filter"));
var Default_1 = __importDefault(require("./Default"));
var ToArray_1 = __importDefault(require("./ToArray"));
describe('sequences/Default', function () {
    it('test 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 1, 3)
            .pipe(Filter_1.default, function (val) { return val > 10; })
            .pipe(Default_1.default, 0)
            // .pipe(Each, console.log)
            .pipe(ToArray_1.default)
            // .pipe(Each, console.log)
            .pipe(Assert_1.default, function (val) { return val.length === 1; })
            .pipe(Assert_1.default, function (val) { return val[0] === 0; })
            .read();
    });
    it('test 2', function () {
        Count_1.default()
            .pipe(Slice_1.default, 1, 3)
            // .pipe(Filter, val => val > 10)
            .pipe(Default_1.default, 0)
            // .pipe(Each, console.log)
            .pipe(ToArray_1.default)
            // .pipe(Each, console.log)
            .pipe(Assert_1.default, function (val) { return val.length === 2; })
            .pipe(Assert_1.default, function (val) { return val[0] === 1; })
            .pipe(Assert_1.default, function (val) { return val[1] === 2; })
            .read();
    });
});
