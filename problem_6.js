// PROJECT EULER - PROBLEM 6
function sumSqDiff(limit){
  sum = 0
  squaresum = 0
  for(var i = 0; i <= limit; i++){
    sum += Math.pow(i,2)
    squaresum += i;
  }
  return Math.pow(squaresum,2) - sum;
}
