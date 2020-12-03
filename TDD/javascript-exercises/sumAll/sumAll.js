const sumAll = function(num1, num2) {
    let total = 0;
    const error = 'ERROR';
    // check if num1 & num2 are numeric and greater than 0
    if (num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number') {
        return error;
    } else {
        // add numbers to total to get the sum between 2 numbers.
        if (num2 < num1) {
            for (num2; num2 <= num1; num2++) {
                    total += num2
                }
        } else {
            for (num1; num1 <= num2; num1++) {
                    total += num1
                }
        }
        return total;
    }  
}

module.exports = sumAll
