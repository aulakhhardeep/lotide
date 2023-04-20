//a function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr3) { //passing an array to function
  const flattenedArray = [];//a variable to store the flattened array.
  for (let i = 0; i < arr3.length; i++) { //accessing all elements of array(arr3)
    if (Array.isArray(arr3[i])) { //checking if the elements inside array(arr3) is an array or not.
      for (const element of arr3[i]) { //looping through those elements of array(arr3) which are arrays.
        flattenedArray.push(element); //storing each element of those arrays in a variable.
      }
    } else { //elements of parameter arr3 are not arrays, simply store those elements in the same variable
      flattenedArray.push(arr3[i]);
    }
  }
  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);

module.exports = flatten;