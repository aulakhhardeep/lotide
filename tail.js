//a function that takes in an array and returns everything except the first element of the array.
const tail = function(arr) {
  const tailedArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailedArr.push(arr[i]);
  }
  return tailedArr;
};

module.exports = tail;




