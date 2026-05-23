class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_sublen = 0
        for i in range(len(s)):
            for j in range(len(s)):
                if j - i < max_sublen:
                    continue
                    
                substr = s[i:j+1]
                if sorted(substr) == sorted(list(set(substr))):
                    max_sublen = max(max_sublen, len(substr))
            
        return max_sublen