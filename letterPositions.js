const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  let sentenceWithoutSpace = sentence.replaceAll(" ", ""); // removing the space
  const results = {}; // to store the final result
  for (let j = 0; j < sentenceWithoutSpace.length; j++) {
    {

      if (results[sentenceWithoutSpace[j]]) {
        results[sentenceWithoutSpace[j]] = [...results[sentenceWithoutSpace[j]],j];
      }  else {
        results[sentenceWithoutSpace[j]] = [j];
      }
    }
  }
  
  return results;
};


//Test code
assertArraysEqual(letterPositions("hello Hardeep").h, [0]);
assertArraysEqual(letterPositions("hello Hardeep").o, [4]);

module.exports = letterPositions;
