// PROJECT EULER - PROBLEM 9

function findTriplet(num){
    for (var a = 1; a < num; a++)
        for (var b = 2; b < a; b++){
             if (a*a + b*b === (num-a-b)*(num-a-b))
                    return a * b * (num-a-b);
            }
    return -1;
}
