//a function that takes in 2 values and returns true if they are equal and false otherwise.
const assertEqual = function(actual, expected) {
  if (actual === expected) { // checking if values are equal
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;