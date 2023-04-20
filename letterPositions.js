//a function that takes in a string and returns all indices of letter positions in the string.
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {}; // to store the final result
  for (let j = 0; j < sentence.length; j++) {
    {
      if (sentence[j] !== ' ') {
        if (results[sentence[j]]) {
          results[sentence[j]] = [...results[sentence[j]],j];
        }  else {
          results[sentence[j]] = [j];
        }
      }
    }
  }
  return results;
};



//Test code
assertArraysEqual(letterPositions("hello Hardeep").h, [0]);
assertArraysEqual(letterPositions("hello Hardeep").o, [4]);
console.log(letterPositions("lighthouse in the house"));
module.exports = letterPositions;
