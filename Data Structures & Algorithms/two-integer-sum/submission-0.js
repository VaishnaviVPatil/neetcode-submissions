class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap  = new Map();

        for(let i=0;i<nums.length;i++){
            const num = nums[i];
            const complement = target-num; 
            const sumIndex = numMap.get(complement)
            const targetIndex = numMap.has(complement)
            if(targetIndex){
                return [i, sumIndex]
            }

            numMap.set(num, i)
        }
        return [-1,-1]
    }
}
