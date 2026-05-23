class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        init = -1

        for i in range(len(arr)-1, -1, -1):
            new_max = max(init, arr[i])
            arr[i] = init
            init  = new_max
        return arr

        