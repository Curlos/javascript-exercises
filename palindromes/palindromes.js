const palindromes = function (str) {
    str = str.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, "");
    left = 0 
    right = str.length - 1

    console.log([str, 'hello'])

    while (left < right) {
        console.log(str[left].toLowerCase(), str[right].toLowerCase())
        if (str[left].toLowerCase() != str[right].toLowerCase()) {
            return false
        }

        left += 1
        right -= 1
    }

    return true
};

module.exports = palindromes;
