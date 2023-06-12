/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const transformedArr = []
  arr.forEach((element, index) => {
    if (fn(element, index)) {
      //   console.log('element ' + element)
      //   console.log('index ' + index)
      transformedArr.push(element)
    }
  })
  console.log(transformedArr)
  return transformedArr
}

var numberSets = [
  [0, 10, 20, 30],
  [1, 2, 3],
  [-2, -1, 0, 1, 2],
]
function greatedThan10(n) {
  return n > 10
}

function firstIndex(n, i) {
  return i === 0
}

function plusOne(n) {
  return n + 1
}

filter(numberSets[0], greatedThan10)
filter(numberSets[1], firstIndex)
filter(numberSets[2], plusOne)
