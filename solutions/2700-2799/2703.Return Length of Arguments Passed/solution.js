/**
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length
}

/**
 * argumentsLength(1, 2, 3); // 3
 */

/**
 * In JavaScript, arguments are passed as an array-like object.
 * Because of this, you can use a lot of the same kind of functions on arguments as you can on arrays,
 * including using args.length.
 * */
