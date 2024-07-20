class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :return type: List[int]
        """
        hash = dict()
        for i in range(len(nums)):
            complement = target - nums[i]
            if (complement in hash):
                return [hash[complement], i]
            hash[nums[i]] = i
        
    

        