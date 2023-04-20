//a function that takes in a sentence and returns a count of each of the letters in the sentence.
const assertEqual = require('./assertEqual');
const countLetters = function(sentenceOfLetters) {
  const x = sentenceOfLetters.replaceAll(" ", ""); //removing space from the sentence and storing the new value in a variable
  const results = {};//declaring a variable as an empty object to store the final result.
  for (const letter of x) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
    
  }
  return results;
};


//Test code
const stringLetters = " lighthouse in the house";
const result1 = countLetters(stringLetters);
console.log(result1);


assertEqual(result1["l"],1);
assertEqual(result1["e"],3);

module.exports = countLetters;