const repeatString = function(string, times) {
        let repeatedString = "";
        const error = 'ERROR';
    
        // Step 2. Set the While loop with (times > 0) as the condition to check
        if (times < 0) {
            return error;
        }
        while (times > 0) { // As long as times is greater than 0, the statement is executed
                repeatedString += string; // repeatedString = repeatedString + string;
                times--;
        }
        return repeatedString;
}

module.exports = repeatString
