const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(nums) {
  if (nums.length === 0) {
    return 0
  }
	return nums.reduce((accumulator, num) => accumulator + num)
};

const multiply = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  return nums.reduce((accumulator, num) => accumulator * num)
};

const power = function(num1, num2) {
  return num1 ** num2
};

const factorial = function(num) {
	let fact = 1
  
  for (let i = 1; i <= num; i++) {
    fact *= i
  }

  return fact
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
