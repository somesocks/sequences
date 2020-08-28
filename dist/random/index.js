"use strict";
/** @namespace sequences.random */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomSelection = exports.RandomInteger = exports.RandomBoolean = exports.Random = exports.XORShift32 = void 0;
var XORShift32_1 = __importDefault(require("./XORShift32"));
exports.XORShift32 = XORShift32_1.default;
var Random_1 = __importDefault(require("./Random"));
exports.Random = Random_1.default;
var RandomBoolean_1 = __importDefault(require("./RandomBoolean"));
exports.RandomBoolean = RandomBoolean_1.default;
var RandomInteger_1 = __importDefault(require("./RandomInteger"));
exports.RandomInteger = RandomInteger_1.default;
var RandomSelection_1 = __importDefault(require("./RandomSelection"));
exports.RandomSelection = RandomSelection_1.default;
