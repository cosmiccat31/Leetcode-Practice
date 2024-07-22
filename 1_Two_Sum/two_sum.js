/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = {}
    for (i = 0; i<nums.length; i++){
        
        if ((target - nums[i]) in dict){
            return [dict[target - nums[i]], i]
        } else{
            dict[nums[i]] = i
        }
    }
};
