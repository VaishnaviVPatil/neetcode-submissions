class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        newList = sorted(nums)

        count = 1
        curr = 1

        print(newList)
        for i in range(len(newList) - 1): 
            diff = newList[i + 1] - newList[i]

            if diff == 0:
                continue
            elif diff == 1:
                count = count + 1
            else:
                curr = max(curr, count)
                count = 1
        
        return max(curr, count)
