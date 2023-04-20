//a function that takes in 2 objects and returns true if they are equal and false otherwise.
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//Test code
const carObject = { make: ["honda", "hundai"], year: "2020" };
const anotherCarObject = { year: "2020", make: ["honda", "hundai"] };
assertObjectsEqual(carObject, anotherCarObject);//=> true

const suvCarObject = { year: "2020", make: ["honda", "hundai"], transmission: "automatic" };
assertObjectsEqual(carObject , suvCarObject); //=> false

module.exports = assertObjectsEqual;