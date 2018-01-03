function orderWeightV2(strng) {
  var weights = strng.split(' '); // splits string into an array based on spaces
 
// divide and conquer
// sort takes 2 array index's at a time (a, b) and allows you to do a
comparison between each pair
  weights.sort(function(a, b) {
    var aSum = getSum(a); // call getSum() ie: value 246 = 2 + 4 + 6 = 12
    var bSum = getSum(b); // call it again with b 
 
    if (aSum === bSum) { // compare based on sum only
      if (a < b) {
        return -1; // -1 means sort a before b
      } else {
        return 1; // 1 means sort b before a
      }
 
    } else if (aSum < bSum) { //if a is less that b keep it same
      return -1;
    }
    return 1;  // otherwise b before a
  });
 
  return weights.join(" ");
}
 
// called above inside sort
function getSum(str) {
  return str.split('').reduce(function(sum, next) {
    return sum + Number(next);
  }, 0);
}
 
// the above function uses reduce but could also be written like below
function getTotal(str) {
  str = str.split('');
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  return sum;
}