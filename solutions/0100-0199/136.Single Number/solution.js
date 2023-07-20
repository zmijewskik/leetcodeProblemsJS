/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let uniqNum = 0
  for (let i = 0; i < nums.length; i++) {
    // Concept of XOR
    uniqNum = uniqNum ^ nums[i]
  }
  return uniqNum
}
