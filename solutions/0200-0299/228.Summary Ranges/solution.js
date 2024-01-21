/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const output = [];
    let i = 0;
    while(i < nums.length){
        let beg, last;
        beg = nums[i];
        while(i+1 < nums.length && nums[i+1] == nums[i] + 1) i++;
        last = nums[i];
        if(beg == last) output.push(beg + "");
        else output.push(beg + "->" + last);
        i++;
    }
    return output;
};