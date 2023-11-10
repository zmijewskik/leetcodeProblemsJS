/**
 * @param {number} numRows
 * @return {number[][]}
 */
// Recursion
var generate = function (numRows) {
  // Base cases
  if (numRows === 0) {
    return []
  }
  if (numRows === 1) {
    return [[1]]
  }

  // Recursion
  let prevRows = generate(numRows - 1)
  // Generating a new row
  let newRow = new Array(numRows).fill(1)

  // Updating Values in the New Row
  for (let i = 1; i < numRows - 1; i++) {
    newRow[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i]
  }

  // Adding the New Row to Previous Rows
  prevRows.push(newRow)

  // console.log(prevRows)

  // Returning the Result
  return prevRows
}

// generate(5)
