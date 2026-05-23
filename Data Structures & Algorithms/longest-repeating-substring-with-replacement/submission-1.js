class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
       let res = 0;
        let charSet = new Set(s);

        for(let char of charSet){
            let l = 0;
            let count = 0;
            for(let i = 0; i<s.length; i++){
                if(s[i] === char){
                    count++;
                }

                while((i - l + 1) - count > k){
                    if(s[l] === char){
                        count--;
                    }
                    l++;
                }

                res = Math.max(res, i - l + 1);
            }
        }
        return res;
    }
}
