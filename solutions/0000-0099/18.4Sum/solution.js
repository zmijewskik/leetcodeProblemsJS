/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var sort = function (x) {
  x.sort((a, b) => a - b)
}

var fourSum = function (nums, target) {
  sort(nums)
  const result = []

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let low = j + 1
      let high = nums.length - 1

      while (low < high) {
        const sum = nums[i] + nums[j] + nums[low] + nums[high]
        if (sum === target) {
          result.push([nums[i], nums[j], nums[low], nums[high]])
          while (nums[low] === nums[low + 1]) low++
          while (nums[high] === nums[high - 1]) high--
          low++
          high--
        } else if (sum < target) {
          low++
        } else {
          high--
        }
      }
      while (nums[j] === nums[j + 1]) j++
    }
    while (nums[i] === nums[i + 1]) i++
  }
  return result
}

var nums = [1, 0, -1, 0, -2, 2],
  target = 0

var result = fourSum(nums, target)
console.log(result)
