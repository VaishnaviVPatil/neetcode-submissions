class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        anaMan = {}
        for i in range(len(strs)):
            strNew = ("").join(sorted(strs[i]))
            
            if strNew not in anaMan:
                anaMan[strNew] = []
            
            anaMan[strNew].append(strs[i])
            
        return list(dict.values(anaMan))