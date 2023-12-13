/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  // toal 2^n codes for bit length n
  const codeCount = 1 << n

  let result = []

  // generate gray code from 0, and toggle 1 bit on each iteration
  // toggle mask: ( i >> 1 )

  for (let i = 0; i < codeCount; i++) {
    code = i ^ (i >> 1)
    result.push(code)
  }

  return result
}
