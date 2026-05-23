class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === "") return ""

        let countT = {}
        let window = {}
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0, need = Object.keys(countT).length
        let res = [-1, -1]
        let resLen = Infinity
        let l = 0

        for(let i = 0; i<s.length; i++){
            let c = s[i]
            window[c] = (window[c] || 0) + 1

            if(countT[c] && window[c] === countT[c]){
                have++
            }

            while(have === need){
                if((i-l + 1)< resLen){
                    resLen = i - l + 1
                    res = [l, i]
                }

                window[s[l]]--
                if(countT[s[l]] && window[s[l]] < countT[s[l]]){
                    have--
                }
                l++
            }
        }
        return resLen === Infinity ? "" : s.slice(res[0], res[1] +1)
    }
}
