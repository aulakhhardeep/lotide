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
  console.log(results);
  return results;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // checking the length of both arrays.
    return false;
  } else {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};



//Test code
assertArraysEqual(letterPositions("hello Hardeep").h, [0]);
assertArraysEqual(letterPositions("hello Hardeep").o, [4]);
assertArraysEqual(letterPositions("hello Hardeep").p, [0]);
