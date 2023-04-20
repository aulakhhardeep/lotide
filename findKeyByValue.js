//a function that takes in an object and a value and returns the first key that corresponds to that value.
const assertEqual = require('./assertEqual');

const findKeyByValue = function(object1, value) {//object1 and value are parameters
  const keys = Object.keys(object1); //accessing keys from an object
  for (const key of keys) { //iterate through each key of object
    if (object1[key] === value) {
      return key; //returning the first key whose value is matching with the 'value' parameter
    }
  }
  return undefined; //returning undefined if the values of keys does not match with the value we are passing as a parameter
};


//Test code
const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;