/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) return console.log(s)

  let rows = []
  let converted = ''
  let reverse = false
  let count = 0

  for (let i = 0; i < numRows; i++) rows[i] = []
  for (let i = 0; i < s.length; i++) {
    rows[count].push(s[i])
    reverse ? count-- : count++
    if (count === numRows - 1 || count === 0) reverse = !reverse
  }
  return console.log(
    rows.reduce((converted, cur) => converted + cur.join(''), '')
  )
}

let s = ['PAYPALISHIRING', 'A']
let numRows = [3, 4, 1]
convert(s[0], numRows[0])
convert(s[0], numRows[1])
convert(s[1], numRows[2])
