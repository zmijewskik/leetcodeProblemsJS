/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastWordLetterCounter = 0
  for (i = s.length - 1; i >= 0; ) {
    if (s[i--] != ' ') lastWordLetterCounter++
    else if (lastWordLetterCounter > 0) return lastWordLetterCounter
  }
  return lastWordLetterCounter
}
