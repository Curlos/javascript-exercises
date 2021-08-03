const removeFromArray = function(arr, ...elemsToRemove) {
    console.log(elemsToRemove)
    return arr.filter((elem) => !elemsToRemove.includes(elem))
};

module.exports = removeFromArray;
