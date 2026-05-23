class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let output = [[]]

        for(let num of nums){
            let curr = num
            let size = output.length
            for(let i = 0; i<size; i++){
                let subset = output[i].slice()
                subset.push(curr)
                output.push(subset)
            }
        }
        return output
    }
}
