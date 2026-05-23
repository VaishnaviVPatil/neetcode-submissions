class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currSum = 0
        let res = nums[0]
        for(let num of nums){
            if(currSum< 0){
                currSum = 0
            }
            currSum += num
            res = Math.max(currSum, res)
        }
        return res
    }
}
