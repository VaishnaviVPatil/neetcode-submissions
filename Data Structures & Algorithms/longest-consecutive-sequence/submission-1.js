class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = new Set(nums)
        let res = 0

        // for(let num of nums){
        //     let curr = num, streak = 0
        //     while(longest.has(curr)){
        //         streak++
        //         curr++
        //     }
        //     res = Math.max(streak, res)
        // }
        // return res

        for(let num of nums){
            let curr = num, length = 1
            while(longest.has(curr + length)){
                length++
            }
            res = Math.max(length, res)
        }
        return res
    }
}
