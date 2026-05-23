class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) { 
        let res = 0 
        for(let i=0; i< s.length; i++){
            let chatSt = new Set()
            for(let j=i; j< s.length; j++){
                if(chatSt.has(s[j]) ){
                    break
                } 
                chatSt.add(s[j]) 
            }   
            res = Math.max(res, chatSt.size);      
        }
        return res
    }
}
