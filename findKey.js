const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  let keys = Object.keys(object);
  //console.log(keys); // with this getting keys in a array.
  for (let key of keys) {
    //console.log(key); // getting keys individually.
    if (callback(object[key])) {
      //console.log(key);
      return key;
    }
  }
  //console.log("undefined");// just to see if function is working
  return undefined;
};

const object1 =  {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(object1, x => x.stars === 7), undefined);
assertEqual(findKey(object1, x => x.stars === 2,), "noma");
assertEqual(findKey(object1, x => x.stars === 1,), "Blue Hill");

module.exports = findKey;