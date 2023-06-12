/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return 'Hello World'
  }
}

const f = createHelloWorld()
var result = f()

console.log(result)
