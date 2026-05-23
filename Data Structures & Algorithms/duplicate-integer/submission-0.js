class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numSet = [];
        console.log(numSet)
        for( const num of nums){
            if(numSet.includes(num)) return true;
            numSet.push(num)
        }
        return false
    }
}
