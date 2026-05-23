class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) { 
        // for(let i = 0;i<nums.length; i++){
        //     for(let j = i+1;j<nums.length; j++){
        //         if(nums[i] + nums[j] === target){
        //             return [i, j]
        //         }
        //     }
        // }
        let numMap = new Map()

        for(let i = 0; i < nums.length; i++){ 
            let num = nums[i]
            let complement = target - num
            let subIndex = numMap.get(complement)
            let targetI = numMap.has(complement)
            if(targetI){
                return [i, subIndex]
            }
            numMap.set(num, i)
        }
        return [-1, -1]
    }
}
