class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        let output = [] 
        
        for(let i = 0; i< nums.length; i++){
            if(nums[i] > 0) break
            if(i > 0 && nums[i] === nums[i -1]) continue

            let l = i+1
            let r = nums.length -1
            while(l<r){
                let currSum = nums[i] + nums[r] + nums[l]

                if(currSum > 0){
                    r--
                } 
                else if(currSum < 0){
                    l++
                }
                else{
                    output.push([nums[i],nums[r],nums[l]]);
                    r--
                    l++
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return output
    }
}
