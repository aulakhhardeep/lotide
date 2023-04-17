const tail = function(arr) {
  let tailedArr = [];
  for (let i = 1; i < arr.length; i++) { //by starting the index from 1, removed the first element which was on index 0
    tailedArr.push(arr[i]);
  }
  return tailedArr;
};

module.exports = tail;




