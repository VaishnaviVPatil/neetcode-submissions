class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {}
        for(let str of strs){
            let sstr = str.split("").sort().join()
            if(!res[sstr]){
                res[sstr] = []
            }
            res[sstr].push(str)  
        }  
        return Object.values(res);
    }
}
