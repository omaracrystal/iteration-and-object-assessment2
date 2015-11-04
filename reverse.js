// This function should return an array that is the reverse of the given array,
// but without using JavaScript's built-in `reverse()` function.

module.exports = function (input) {
  var reverseArr = [];
  for (var i = input.length - 1; i >= 0; i--) {
    reverseArr.push(input[i]);
  }
  return reverseArr;
};
