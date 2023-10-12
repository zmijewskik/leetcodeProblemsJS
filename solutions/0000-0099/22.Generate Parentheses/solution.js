/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const res = []

  if (n < 1 || n > 8) return res

  const go = (l, r, s) => {
    if (s.length === 2 * n) {
      res.push(s)
      return
    }

    if (l < n) go(l + 1, r, s + '(')
    if (r < l) go(l, r + 1, s + ')')
  }

  go(0, 0, '')

  console.log(res)

  return res
}

generateParenthesis(0)
generateParenthesis(1)
generateParenthesis(2)
generateParenthesis(3)
generateParenthesis(8)
