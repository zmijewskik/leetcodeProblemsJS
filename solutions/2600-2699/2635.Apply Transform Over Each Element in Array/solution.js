/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const transformedArr = []
  arr.forEach((element, index) => {
    transformedArr[index] = fn(element, index)
  })
  return transformedArr
}

var numbers = [1, 2, 3]

function plusOne(n) {
  return n + 1
}

function plusI(n, i) {
  return n + i
}

function constant() {
  return 42
}

const newArray1 = map(numbers, plusOne)
console.log(newArray1)
const newArray2 = map(numbers, plusI)
console.log(newArray2)
const newArray3 = map(numbers, constant)
console.log(newArray3)
