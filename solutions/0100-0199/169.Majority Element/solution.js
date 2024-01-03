/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let solution = 0,
    count = 0
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      solution = nums[i]
      count = 1
    } else if (solution == nums[i]) {
      count++
    } else {
      count--
    }
  }
  return solution
}
