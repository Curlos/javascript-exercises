const sumAll = function(num1, num2) {
    typeof(num1) != Number
    typeof(num1) != Number
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR"
    }

    if (typeof(num2) != Number)

    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }

    let fromNum = Math.min(num1, num2)
    let toNum = Math.max(num1, num2)
    let totalSum = 0
    
    for (let i = fromNum; i <= toNum; i++) {
        totalSum += i
    }

    return totalSum
};

module.exports = sumAll;
