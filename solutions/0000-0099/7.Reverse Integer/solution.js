/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0
  const sign = x < 0 ? -1 : 1
  x = Math.abs(x) // .abs() -> return absolut value
  while (x !== 0) {
    const digit = x % 10 // 891%10 -> 1
    rev = rev * 10 + digit // 1*10+2 -> 10+2 -> 12
    x = Math.floor(x / 10) // 891/10 -> 89.1 floor -> 89
  }
  const result = sign * rev
  if (result > 2 ** 31 - 1 || result < -(2 ** 31)) return 0 // ** -> exponentiation
  return result
}
