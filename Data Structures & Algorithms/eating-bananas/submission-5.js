class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) { 
        let left = 1, right = Math.max(...piles)
        let res = right

        while(left <= right){
            const k = Math.floor((left + right) / 2)

            let total = 0
            for(const pile of piles){
                total = total + Math.ceil(pile/k)
            }
            if(total <= h){
                res = k
                right = k-1
            }
            else{
                left = k +1
            }
        }
        return res
    }
}
