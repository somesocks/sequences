/* eslint-env node */

// let Assert = require('sequences/Assert');
// let From = require('sequences/From');
// let ToArray = require('sequences/ToArray');

// let Assert = require('./Assert');
// let From = require('./From');
// let ToArray = require('./ToArray');
//
// let isInteger = (val) => Number.isInteger(val);
//
// // val is [ 1, 2, 3, 4 ]
// let val = From(1, 2, 3, 4)
// 	.pipe(Assert, isInteger)
// 	.pipe(ToArray)
// 	.read();
//
// // throws an assertion error
// let val2 = From(1, 2, 3, "4")
// 	.pipe(Assert, isInteger)
// 	.pipe(ToArray)
// 	.read();
