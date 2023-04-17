//test/middle
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//Test Code

assertArraysEqual(middle([1,2,3,8,7,5,6]), [8]);
