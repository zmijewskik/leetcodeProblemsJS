/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let mostWater = 0,
    i = 0,
    j = height.length - 1
  while (i < j) {
    mostWater = Math.max(mostWater, Math.min(height[i], height[j]) * (j - i))
    height[i] <= height[j] ? i++ : j--
  }
  return mostWater
}
