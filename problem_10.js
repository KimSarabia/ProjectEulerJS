// PROJECT EULER - PROBLEM 10

function sumOfPrimes(limit) {
    let arr = Array.from(new Array(limit), (x,i) => i);
    return arr.filter(CheckIfPrime).reduce((a,b) => a + b) + 1;
}

//SOURCE: https://docs.microsoft.com/en-us/scripting/javascript/reference/filter-method-array-javascript
function CheckIfPrime(value, index, ar) {
    high = Math.floor(Math.sqrt(value)) + 1;
    for (var div = 2; div <= high; div++) {
        if (value % div === 0) {
            return false;
        }
    }
    return true;
}
