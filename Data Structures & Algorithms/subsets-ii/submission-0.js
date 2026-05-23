class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let output = [[]]
        nums.sort((a,b) => a-b)
        for(let num of nums){
            let size = output.length;
            for (let i = 0; i < size; i++) {
                let subset = output[i].slice();  
                subset.push(num); 
                output.push(subset);
            }
        }

        let noDup = []
        let seen = new Set()
        for(let seet of output){
            let key = JSON.stringify(seet); 
            if(!seen.has(key)){
                noDup.push(seet) 
                seen.add(key);
            }
        }
        return noDup
    }
}
