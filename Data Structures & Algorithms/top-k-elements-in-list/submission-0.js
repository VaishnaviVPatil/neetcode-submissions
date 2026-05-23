class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countmap = {}
        for(let num of nums){
            if(!countmap[num]){
                countmap[num] = 0
            }
            countmap[num] = (countmap[num] || 0) + 1
        } 
        return Object.keys(countmap).sort((a, b) => countmap[b] - countmap[a]).slice(0, k)
    }
}
