// PROJECT EULER - PROBLEM 4

function largestProdPal(){
  var res = 0;
  for(var i = 999; i >= 100; i--){
     for(var j = i; j >= 100; j--){
       if((j * i).toString() === (j * i).toString().split('').reverse().join('')){
         curr = j*i;
         if(curr > res){
           res = curr;
         }
       }
     }
  }
  return res;
}