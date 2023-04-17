const assertEqual = require('./assertEqual');
const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) { // checking the length of both arrays.
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

module.exports = eqArrays;

