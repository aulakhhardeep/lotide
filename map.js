const map = function(array, callback) {
  //console.log('array: ', array);
  //console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
    results.push(callback(item));
  }
  return results;
};


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

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]); 
console.log(results1);



