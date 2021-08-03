const reverseString = function(string) {
    let strArr = string.split('')
    let reversedStrArr = []

    for (let i = strArr.length - 1; i >= 0; i--) {
        reversedStrArr.push(strArr[i])
    }

    let reversedString = reversedStrArr.join('')

    return reversedString
};

module.exports = reverseString;
