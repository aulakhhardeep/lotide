const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr3) {
  let flattenedArray = [];
  for (let i = 0; i < arr3.length; i++) {
    if (Array.isArray(arr3[i])) {
      for (const element of arr3[i]) {
        flattenedArray.push(element);
      }
    } else {
      flattenedArray.push(arr3[i]);
    }
  }
  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);

module.exports = flatten;