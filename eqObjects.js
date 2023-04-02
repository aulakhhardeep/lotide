const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // checking the length of both arrays.
    return false;
  } else { //if arrays are equal in length then use for loop to go through each element of that arrays
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] !== arr2[i]) { //checking if value of elements of array1 is not equal to array2.
        return false;
      }
    }
  }
  return true; // if value is equal so return true.
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1); // Object.keys(object1) is returning keys.
  let key1Length = key1.length; //giving the number of keys in object1.
  //console.log(key1Length);
  let key2 = Object.keys(object2);
  let key2Length = key2.length;
  //console.log(key2Length);
  if (key1Length !== key2Length) { // checking if number of keys of object1 and object2 are equal or not
    return false;
  }
  for (let key of key1) { // if equal, then for loop is iterating through the keys of objects.
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // this line checks if object 1's and object 2's elements are arrays or not. if elements are arrays, then array those arrays to eqArrays to check if they are equal in length and if their values are also equal.
      eqArrays(object1[key], object2[key]);
    }
  }
  return true;
};

//Test code
const carObject = { make: ["honda", "hundai"], year: "2020" };
const anotherCarObject = { year: "2020", make: ["honda", "hundai"] };
eqObjects(carObject, anotherCarObject); // => true
assertEqual(eqObjects(carObject , anotherCarObject), true);


const suvCarObject = { year: "2020", make: ["honda", "hundai"], transmission: "automatic" };
eqObjects(carObject , suvCarObject); // => false
assertEqual(eqObjects(carObject , suvCarObject), false);