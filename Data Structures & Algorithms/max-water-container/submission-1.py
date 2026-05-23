class Solution:
    def maxArea(self, heights: List[int]) -> int:
        left, right = 0, len(heights) - 1
        max_area = 0

        while left < right:
            area = min(heights[left], heights[right]) * (right - left)
            print(f"left: {left} right: {right} area: {area}")

            max_area = max(max_area, area)
            if heights[left] < heights[right]:
                left += 1
            else:
                right -= 1

        return max_area
        
# 7 ; max seen so far: 7 (1,8)
# 36 ; max so far: 36 (2,8)
# 15; max so far still prev 35(2,8)
# 