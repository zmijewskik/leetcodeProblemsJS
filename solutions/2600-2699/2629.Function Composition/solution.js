/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x
    }
  }
  return functions.reduceRight(function (prevFn, nextFn) {
    return function (x) {
      return nextFn(prevFn(x))
    }
  })
}

var functionSets = [
  [(x) => x + 1, (x) => x * x, (x) => 2 * x],
  [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x],
  [],
]

var arguments = [4, 1, 42]

if (arguments.length < functionSets.length) {
  console.log('There is less arguments than functionSets')
} else if (arguments.length > functionSets.length) {
  console.log('There is less functionSets than arguments')
} else {
  functionSets.forEach((element, index) => {
    const fn = compose(element)
    console.log(fn(arguments[index]))
  })
}
