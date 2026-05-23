class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let buy = prices[0]

        for(let i = 1; i<prices.length; i++){
            if(buy > prices[i]){
                buy = prices[i]
            }
            if(prices[i] - buy > profit){
                profit = prices[i] -buy
            }
        }
        return profit
    }
}
