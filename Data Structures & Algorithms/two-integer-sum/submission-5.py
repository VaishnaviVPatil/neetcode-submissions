class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
       numMap = {}
       
       for i in range(len(nums)): 
            calc = target - nums[i]
            if calc in numMap:
                return [numMap[calc], i]
             
            numMap[nums[i]] = i