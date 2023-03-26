const tail = function(arr) {
  return arr.slice(1); // slice is removing the first element of an array.
};

const assertEqual = function(actual, expected) {
  if (actual.toString === expected.toString) { //toString is used to convert array into String
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]); // this step will take the value of result through tail function, then tail fxn will remove the head element.
assertEqual(result, ["Lighthouse", "Labs"]);

//Test case: Check the original array
/** const words = ["Yo Yo", "Labs"];
tail(words);
console.log(tail(words));
assertEqual(words.length, 2;// here words.length **/