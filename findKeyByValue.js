const assertEqual = require('./assertEqual');

const findKeyByValue = function(object1, value) {
  let keys = Object.keys(object1);
  for (let key of keys) {
    if (object1[key] === value) {
      return key;
    }
  }
  return undefined;
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