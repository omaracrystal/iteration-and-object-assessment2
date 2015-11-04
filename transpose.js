// This function should transpose the given array.

module.exports = function transpose(input) {
  var newArray = input[0].map(function(col, i) {
  return input.map(function(row) {
    return row[i];
  });
});
  return newArray;
};

