const tail = function(arr) {
  return arr.slice(1);
};
const assertEqual = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result, ["Hardeep", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);