const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  } else {
    for (i = 0; i < arr2.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false;
      } 
    }
  }1
  return true;
};

const eqObjects = function(object1, object2) {
  let result1 = Object.keys(object1); // array of keys
  let result2 = Object.keys(object2);
  let objlength1 = result1.length;
  let objlength2 = result2.length;
  if(objlength1 !== objlength2) {
    return false;
  }
  for (const key of result1) { //looping through keys
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if(object1[key] !== object2[key]) { //object1[key] is giving the value of key
        return false;
      }
      }  
  }
  return true;
};

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
};


//Test cases:
let obj1 = { a: 1, b: 2, c: 4, d: [2,3]};
let obj2 = { a: 1, b: 2, c:4, d:[2,3]};
let obj3 = { a: 6, b: 2, c:4, d:[2,3]}

assertObjectEqual(obj1, obj2);
assertObjectEqual(obj2, obj3);