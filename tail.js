const tail = function(arr) {
  const tailedArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailedArr.push(arr[i]);
  }
  return tailedArr;
};

module.exports = tail;




