// PROJECT EULER - PROBLEM 1
function multipleSum(x){
  sum=0;
  for (var i = 1; i < x; i++){
    if(i%3===0 || i%5===0){
      sum+=i
    }
  }
  return sum
}