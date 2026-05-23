class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        mapS, mapT = {}, {}

        if len(t) != len(s): 
            return False

        for i in range(len(s)):
            mapS[s[i]] = s.count(s[i])

        for i in range(len(t)):
            mapT[t[i]] = t.count(t[i])
            
        if mapT == mapS: 
            return True
        else:
            return False
        