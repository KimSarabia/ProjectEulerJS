function xPrime(limit) {
    var counter = 0;
    var res;
    outer: for (var c = 2; c <= Infinity; c++) {
        for (var i = c - 1; i >= 1; i--) {
            if (i === 1) {
                if (counter + 1 === limit) {
                    res = c;
                    break outer;
                }
                counter += 1;
            }
            if (c % i === 0) {
                break;
            }
        }
    }
    return res;
}