const fibonacci = function(num) {

    if (num < 0) {
        return "OOPS"
    }

    let hashTable = {}

    const fibHelper = ((num) => {
        if (num == 0 || num == 1) {
            return 1
        }

        if (num in hashTable) {
            return hashTable[num]
        } 
        let result = fibHelper(num - 1) + fibHelper(num - 2)
        hashTable[num] = result

        return result
    })

    return fibHelper(num - 1)
};

module.exports = fibonacci;
