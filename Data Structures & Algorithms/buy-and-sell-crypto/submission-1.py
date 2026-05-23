class Solution:
    # def maxProfit(self, prices: List[int]) -> int:
    #     sell_price = 0
    #     buy_price = prices[0]

    #     for i in range(1, len(prices)):
    #         if prices[i] < buy_price:
    #             buy_price = prices[i]
    #         else:
    #             curr_prof = prices[i] - buy_price
    #             max_prof = sell_price - buy_price
    #             if curr_prof > max_prof:
    #                 sell_price = prices[i]
        
    #     return sell_price - buy_price if sell_price > 0 else 0



    def maxProfit(self, prices: List[int]) -> int:
        max_prof = 0
        lowest_price = prices[0]

        for i in range(1, len(prices)):
            if prices[i] < lowest_price:
                lowest_price = prices[i]
            else:
                max_prof = max(max_prof, prices[i] - lowest_price)

        return max_prof

