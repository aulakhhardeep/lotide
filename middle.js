const middle = function(array) {
  let result = [];
  if (array.length < 3) {
    return undefined;
  }
  if (array.length % 2 === 1) {  // when items are even
      result.push(array[Math.floor(array.length / 2)]);
    } else { //when items are odd
      result.push(array[Math.round((array.length / 2) - 1)]);
      result.push(array[Math.round((array.length/2))]);
    }
  return result;
};

module.exports = middle;



