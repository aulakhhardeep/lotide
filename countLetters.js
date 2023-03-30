const countLetters = function(sentenceOfLetters) {
  let x = sentenceOfLetters.replaceAll(" ", "");
  //console.log(x);
  let results = {}; // object
  for(const letter of x) {

    if(results[letter]) // here we are accessing a letter from an object.
    {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
    
}
return results;
}


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Test code
const stringLetters = "lighthouse in the house";
//here firstNames is getting passed to allItems array.
const result1 = countLetters(stringLetters);
console.log(result1);


//Questions:
//How to use assertEqual function here?
assertEqual(result1["l"],1);
assertEqual(result1["e"],3);