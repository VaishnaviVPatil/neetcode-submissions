class Solution:
    def findMin(self, nums: List[int]) -> int:
        sortedNums = sorted(nums)
        print (sortedNums[0:1])
        return sortedNums[0:1][0]