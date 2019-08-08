"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("./Assert"));
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
var ToArray_1 = __importDefault(require("./ToArray"));
var Map_1 = __importDefault(require("./Map"));
var Deduplicate_1 = __importDefault(require("./Deduplicate"));
describe('sequences/Deduplicate', function () {
    it('test case 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 0, 50)
            .pipe(Map_1.default, function (val) { return val % 4; })
            .pipe(Deduplicate_1.default)
            // .pipe(Each, console.log)
            .pipe(ToArray_1.default)
            .pipe(Assert_1.default, function (val) { return val.length === 4; })
            .pipe(Assert_1.default, function (val) { return val[0] === 0; })
            .pipe(Assert_1.default, function (val) { return val[1] === 1; })
            .pipe(Assert_1.default, function (val) { return val[2] === 2; })
            .pipe(Assert_1.default, function (val) { return val[3] === 3; })
            .read();
    });
    it('performance test case 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 0, 1000000)
            .pipe(Map_1.default, function (val) { return val % 4; })
            .pipe(Deduplicate_1.default)
            // .pipe(Each, console.log)
            .pipe(ToArray_1.default)
            .pipe(Assert_1.default, function (val) { return val.length === 4; })
            .pipe(Assert_1.default, function (val) { return val[0] === 0; })
            .pipe(Assert_1.default, function (val) { return val[1] === 1; })
            .pipe(Assert_1.default, function (val) { return val[2] === 2; })
            .pipe(Assert_1.default, function (val) { return val[3] === 3; })
            .read();
    });
});
