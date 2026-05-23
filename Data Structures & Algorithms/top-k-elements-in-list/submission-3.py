class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        arr = []
        for num in nums:
            freq[num] = freq.get(num, 0) + 1
            
        newVal = sorted(freq.items(), key=lambda x:x[1], reverse=True)
        for key, val in newVal[0:k]:
            arr.append(key)

        return arr
    