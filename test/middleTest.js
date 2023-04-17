//test/middle
//const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');

//Test Code

//assertArraysEqual(middle([1,2,3,8,7,5,6]), [8]);

const assert = require('chai').assert;
const middle =  require('../middle');

describe("#middle", () => {
  it("returns [8] for [1, 2, 3, 8, 7, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 8, 7, 5, 6]), [8]);
  });

  it("returns undefined for [1, 6]", () => {
    assert.deepEqual(middle([1, 6]), undefined);
  });

  it("returns [9, 0] for [1, 7, 9, 0, 2, 6]", () => {
    assert.deepEqual(middle([1, 7, 9, 0, 2, 6]), [9, 0]);
  });

});

