const assertArraysEqual = require('./assertArraysEqual');
const middle = function(array) {
  let result = [];
  if(array.length % 2 === 0) {
      result.push(array[Math.floor(array.length / 2)]);
    } else {
      result.push(array[Math.round((array.length / 2) - 1)]);
    }
  console.log(result);
  return result;
};

module.exports = middle;



