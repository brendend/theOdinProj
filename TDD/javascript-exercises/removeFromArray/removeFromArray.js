const removeFromArray = function(arr, num1, num2, num3, num4) {
    
    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i] === num1 || arr[i] === num2 || arr[i] === num3 || arr[i] === num4) {
            arr.splice(i, 1)
        }
    }
    return arr;

}

module.exports = removeFromArray
