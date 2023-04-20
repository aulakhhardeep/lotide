//a function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.
const eqArrays = (arr1, arr2) => {//passing two arrays as parameters to function
  if (arr1.length !== arr2.length) { // checking the length of both arrays.
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {//looping through each element of array
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;

