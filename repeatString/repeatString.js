const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR"
    }
    
    let newStrArr = []
    for (let i = 0; i < num; i++) {
        newStrArr.push(str)
    }
    return newStrArr.join('')
};

module.exports = repeatString;
