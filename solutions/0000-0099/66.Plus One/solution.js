/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0
    } else {
      digits[i]++
      return digits
    }
  }
  digits.unshift(1)
  return digits
}

const digitsSets = [[1, 2, 3], [4, 3, 2, 1], [9]]
console.log(plusOne(digitsSets[0])) // 1,2,4
console.log(plusOne(digitsSets[1])) // 4,3,2,2
console.log(plusOne(digitsSets[2])) // 1,0
