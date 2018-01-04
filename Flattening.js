/*

Reduce() method in combination with the concat() method to “flatten”
an array of arrays into a single array

*/

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}, []));