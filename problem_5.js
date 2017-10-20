// PROJECT EULER - PROBLEM 5

function smallestMultiple(max) {
    var res;
    outer: for (var i = 1; i < Infinity; i++) {
		var count = 0;
        for (var j = max; j >= 1; j--) {
            if(i%j === 0){
              count++
            }
        }
        if(count === max){ res = i; break outer;}
    }
   return res;
}