class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array (nums.length).fill(1)
        let left = 1
        
        for(let i=0; i<nums.length; i++){
            output[i] = left * output[i]
            left = nums[i] * left
        }

        let right = 1
        for(let j=nums.length-1; j>=0; j--){
            output[j] = right * output[j]
            right = nums[j] * right
        }

        return output
    }
}
