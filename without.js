const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  } else {
    for (i = 0; i < arr2.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false;
      } 
    }
  }
  return true;
};

const without = function (source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) { // a loop to access elements of itemsToRemove array
    for (let j = 0; j < itemsToRemove.length; j++) { // a loop to access elements of itemsToRemove array
      if(source[i] !== itemsToRemove[i]) {
        result.push(source[i]); 
      }
    }
  }
  console.log("Result", result);
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "lighthouse"]);

module.exports = without;