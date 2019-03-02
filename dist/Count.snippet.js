/* eslint-env node */

let Count = require('./Count');
let Slice = require('./Slice');
let ToArray = require('./ToArray');

// let Count = require('sequences/Count');
// let Slice = require('sequences/Slice');
// let ToArray = require('sequences/ToArray');

// val is [ 0, 1, 2, 3 ]
let val = Count()
	.pipe(Slice, 0, 4)
	.pipe(ToArray)
	.read();


console.log(val);
