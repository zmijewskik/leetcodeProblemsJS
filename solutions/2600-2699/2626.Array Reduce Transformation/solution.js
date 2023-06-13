/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let acc = init
  nums.forEach((element) => {
    acc = fn(acc, element)
  })
  console.log(acc)
  return acc
}

var numberSets = [[1, 2, 3, 4], []]
var inits = [0, 100, 25]

function sum(accum, curr) {
  return accum + curr
}

function sumSquare(accum, curr) {
  return accum + curr * curr
}

function returnZero(accum, curr) {
  return 0
}

reduce(numberSets[0], sum, inits[0])
reduce(numberSets[0], sumSquare, inits[1])
reduce(numberSets[1], returnZero, inits[2])
