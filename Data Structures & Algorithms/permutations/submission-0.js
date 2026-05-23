class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let output = [] 
        this.backtrack(nums, 0, output)
        return output
    }

    backtrack(nums, index, output){
        if(index === nums.length){
            output.push([...nums])
            return
        }
        for(let i = index; i < nums.length; i++){
            [nums[index], nums[i]] = [nums[i], nums[index]];
            this.backtrack(nums, index + 1, output);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
        // for (let i = index; i < nums.length; i++) {
        //     [nums[index], nums[i]] = [nums[i], nums[index]]; // Swap elements
        //     this.backtrack(nums, index + 1, output); // Pass `output` here too
        //     [nums[index], nums[i]] = [nums[i], nums[index]]; // Backtrack to original state
        // }
    }
}
