class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if s == "":
            return True

        j = 0
        for i in range(len(t)):
            if j == len(s):
                return True

            if s[j] == t[i]:
                j = j + 1  
        
        return True if len(s) == j else False

        