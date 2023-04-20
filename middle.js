//a function that takes in an array and returns middle most element of the array.
const middle = function(array) {
  let result = []; //a variable to store result in the form of array
  if (array.length < 3) { //checking if items inside an array are less than 3 (1 or 2) 
    return [];
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



