class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_prof = 0
        buy_price = prices[0]

        for i in range(1, len(prices)):
            if prices[i] < buy_price:
                buy_price = prices[i]
            else:
                curr_prof = prices[i] - buy_price
                if curr_prof > max_prof:
                    max_prof = curr_prof
        
        return max_prof
