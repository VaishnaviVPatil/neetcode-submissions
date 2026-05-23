class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        nums.sort((a,b) => a-b)
        console.log(nums)
        for(let i = 1; i<nums.length;i = i+2){
            if(nums[i] !== nums[i-1]){ 
                return nums[i-1]
            }
        }

        return nums[nums.length - 1];
    }
}
