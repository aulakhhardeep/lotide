const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

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

module.exports = eqObjects;