// PROJECT EULER - PROBLEM 8

function largestProd(bignum){
  var arr = bignum.toString().split('');
  var winner = 0;
  for(var i = 0; i < arr.length - 4; i++){
      var total = 1;
    for(var x = i; x <= i+12; x++){
        total *= parseInt(arr[x]);
   	}
    if(total > winner){winner = total}
  }
  return winner;
}
