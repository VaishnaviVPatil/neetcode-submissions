class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
         
        res = set()
        ans = 0
        for i in range(len(nums)):
            j = 1
            for j in range(len(nums)):
                for k in range(len(nums) - 1, -1, -1):
                    if nums[i] + nums[j] + nums[k] == 0 and i !=j and j !=k and k!=i:
                        triplet = tuple(sorted((nums[i], nums[j], nums[k])))
                        res.add(triplet)

        return [list(a) for a in res] 