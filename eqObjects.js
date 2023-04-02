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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
let key1 = Object.keys(object1);
let key1Length = key1.length;
//console.log(key1Length);
let key2 = Object.keys(object2);
let key2Length = key2.length;
//console.log(key2Length);
if (key1Length !== key2Length) {
  return false;
    }
    else {
      for (let key of key1) {
        if(Array.isArray(object1[key]) !== Array.isArray(object2[key])) {
          return false;
        }
      }
      return true;
    }
};

//Test code
const carObject = { make: ["honda", "hundai"], year: "2020" };
const anotherCarObject = { year: "2020", make: ["honda", "hundai"] };
eqObjects(carObject, anotherCarObject); // => true
assertEqual(eqObjects(carObject , anotherCarObject), true);


const suvCarObject= { year: "2020", make: ["honda", "hundai"], transmission: "automatic" };
eqObjects(carObject , suvCarObject); // => false
assertEqual(eqObjects(carObject , suvCarObject), false);

//Question:
//Where to pass eqArrays?