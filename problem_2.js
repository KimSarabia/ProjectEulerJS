// PROJECT EULER - PROBLEM 2

function evenFib(limit){
  res = 0
  phi = (1 + Math.sqrt(5))/2
  for(var i = 0; i <= Infinity; i+=3){
    fib = (Math.pow(phi,i) - Math.pow((1 - phi),i))/Math.sqrt(5)
    if(fib >= limit){
    break;
    } else {
    res += Math.round(fib)
    }
  }
  return res
}