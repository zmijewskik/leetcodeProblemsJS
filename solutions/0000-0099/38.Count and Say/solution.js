/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  var str = '1'
  for (var i = 1; i < n; i++) {
    var strArray = str.split('')
    str = ''
    var count = 1
    // Loop through current nth level line
    for (var j = 0; j < strArray.length; j++) {
      // Next digit is different
      if (strArray[j] !== strArray[j + 1]) {
        // Go to next non-matching digit
        str += count + strArray[j]
        count = 1
      } else {
        count++
      }
    }
  }
  return str
}

// Examples of nth sequence
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 6.     312211
// 7.     13112221
// 8.     1113213211
// 9.     31131211131221
// 10.    13211311123113112211
// (i+1)th sequence is the "count and say" of the ith sequence
// next sequence is describing the last one
// look at digits as pairs fe. 11 12 21 -> 111221 in 5th
