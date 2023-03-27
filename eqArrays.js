const eqArrays = function(arr1, arr2) {
  for (var i = 0; i <= arr1.length - 1; i++)
  for (var j = 0; j <= arr2.length - 1; j++)
  {
    if (i.length === j.length) {
      if(arr1[i] === arr2[j]) {
        return true;
      } else {
        return false;
      }
    } 
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);