const assertEqual = require('./assertEqual');
const countLetters = function(sentenceOfLetters) {
  const x = sentenceOfLetters.replaceAll(" ", "");
  let results = {};
  for (const letter of x) {
    if (results[letter]) {// here we are accessing a letter from an object.
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
    
  }
  return results;
};


//Test code
const stringLetters = "lighthouse in the house";
//here firstNames is getting passed to allItems array.
const result1 = countLetters(stringLetters);
console.log(result1);


assertEqual(result1["l"],1);
assertEqual(result1["e"],3);

module.exports = countLetters;