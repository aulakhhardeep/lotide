//a function that prints an appropriate message after comparing the two arrays.
const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => { //passing two arrays as parameters
  if (eqArrays(arr1, arr2)) { //using eqArrays function to compare the two arrays.
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;

 



