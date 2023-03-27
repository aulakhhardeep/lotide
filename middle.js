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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if(array.length % 2 === 0)
    {
      result.push(array[Math.floor(array.length / 2)]);
      result.push(array[Math.round((array.length / 2) - 1)]);
    } else {
      result.push(array[Math.round(array.length-1) / 2]);
    }
  }
  return result;
};

