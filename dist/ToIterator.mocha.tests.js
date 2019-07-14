"use strict";
/* eslint-env node, mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("./Assert"));
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
// import Each from './Each';
// import Filter from './Filter';
// import Map from './Map';
// import Reduce from './Reduce';
// import FromArray from './FromArray';
var ToArray_1 = __importDefault(require("./ToArray"));
// import FromBlocks from './FromBlocks';
// import ToBlocks from './ToBlocks';
var FromIterator_1 = __importDefault(require("./FromIterator"));
var ToIterator_1 = __importDefault(require("./ToIterator"));
// import FromObject from './FromObject';
// import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';
describe('sequences.ToIterator', function () {
    it('test 1', function () {
        var iter = Count_1.default()
            .pipe(Slice_1.default, 0, 10)
            .pipe(ToIterator_1.default);
        var res = FromIterator_1.default(iter)
            .pipe(ToArray_1.default)
            .pipe(Assert_1.default, function (val) { return Array.isArray(val); })
            .pipe(Assert_1.default, function (arr) { return arr.length === 10; })
            .read();
        // console.log('res', res);
    });
});
