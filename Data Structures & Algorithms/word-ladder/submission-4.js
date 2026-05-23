class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if(!wordList.includes(endWord)) return 0

        const nei = {}
        wordList.push(beginWord)
        for(const word of wordList){
            for(let i = 0; i<word.length; ++i){
                const pattern = word.substring(0, i) + "*" + word.substring(i+1)
                if(!nei[pattern]){
                    nei[pattern] = []
                }
                nei[pattern].push(word)
            }
        }

        const visit = new Set([beginWord])
        const q = new Queue([beginWord])
        let res = 1
        while(!q.isEmpty()){
            let len = q.size()
            for(let i = 0; i<len; i++){
                const word =  q.pop()
                if(word === endWord){
                    return res
                }
                for(let j = 0; j< word.length; ++j){
                    const pattern = word.substring(0, j) + '*' + word.substring(j + 1);
                    for(const neiW of nei[pattern]){
                        if(!visit.has(neiW)){
                            visit.add(neiW)
                            q.push(neiW)
                        }
                    }
                }
            }
            ++res
        }
        return 0
    }
}
