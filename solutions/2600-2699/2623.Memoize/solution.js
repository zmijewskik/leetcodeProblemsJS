/**
 * @param {Function} fn
 */
function memoize(fn) {
  const cache = {}
  return function (...args) {
    const key = JSON.stringify(args)

    if (key in cache) {
      return cache[key]
    }

    const result = fn.apply(this, args)
    cache[key] = result

    return result
  }
}

let addCallCount = 0
const memoizedFnAdd = memoize(function (a, b) {
  addCallCount += 1
  return a + b
})
memoizedFnAdd(2, 3) // 5
memoizedFnAdd(2, 3) // 5
console.log(addCallCount) // 1

let factorialCallCount = 0
const memoizedFnFactorial = memoize(function (num) {
  factorialCallCount += 1
  var result = num
  if (num === 0 || num === 1) return 1
  while (num > 1) {
    num--
    result *= num
  }
  return result
})

memoizedFnFactorial(2) // 2
memoizedFnFactorial(3) // 6
memoizedFnFactorial(2) // 2
console.log(factorialCallCount) // 2
memoizedFnFactorial(3) // 6
console.log(factorialCallCount) // 2

// TO DO
// fib function
