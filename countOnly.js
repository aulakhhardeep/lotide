const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
/**
 * 
 * @param {*} allItems 
 * @param {*} itemsToCount 
 * @returns itemsToCount // it should return a object where the keys are, the keys in itemsToCount are true and value is the number of occurence of key in the allItems Array.
 */

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const key in itemsToCount) {
    let shouldCount = itemsToCount[key] === true;
    if (shouldCount) {
    let count = 0;
    for(const item of allItems) {
      let match = item === key;
      if (match) {
      count ++;
      }
    }
    if ( count > 0) {
    results[key] = count;
    } 
  }
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
