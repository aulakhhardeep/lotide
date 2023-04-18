const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  let sentenceWithoutSpace = sentence.replaceAll(" ", ""); // removing the space
  const results = {}; // to store the final result
  for (let j = 0; j < sentenceWithoutSpace.length; j++) {
    {

      if (results[sentenceWithoutSpace[j]]) {// here we are accessing a letter from an object.
        results[sentenceWithoutSpace[j]] = [...results[sentenceWithoutSpace[j]],j];// .... operator is copying the current content of an array
      }  else {
        results[sentenceWithoutSpace[j]] = [j];
      }
    }
  }
  //console.log(results);
  return results;
};


//Test code
assertArraysEqual(letterPositions("hello Hardeep").h, [0]);
assertArraysEqual(letterPositions("hello Hardeep").o, [4]);

module.exports = letterPositions;
