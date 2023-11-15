/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var answer = new Array(rowIndex + 1)
  answer[0] = answer[rowIndex] = 1

  for (i = 1, up = rowIndex; i < rowIndex; i++, up--) {
    answer[i] = (answer[i - 1] * up) / i
  }

  return answer
}
