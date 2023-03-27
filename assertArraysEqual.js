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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2], [1,3,3]);