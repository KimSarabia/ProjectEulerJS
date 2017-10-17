// PROJECT EULER - PROBLEM 3

function largestPrime(x) {
  var product = 1;
  var res;
  outer: for (var c = 2; c <= Infinity; c++) {
    for (var i = c - 1; i >= 1; i--) {
      if (i === 1) {
        if (x % c === 0) {
          product *= c
          if (product === x) {
            res = c;
            break outer;
          }
        }
      }
      if (c % i === 0) {
        break;
      }
    }
  }
  return res;
}