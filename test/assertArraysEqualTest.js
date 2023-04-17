//test/assertArraysEqual
const assertArraysEqual = require('../assertArraysEqual');

//Test Code
assertArraysEqual([1,2,3], [1,2,3]); //output should be passed 1,2,3 === 1,2,3
assertArraysEqual([1,2], [1,3,3]); //output should be passed 1,2 !== 1,3,3