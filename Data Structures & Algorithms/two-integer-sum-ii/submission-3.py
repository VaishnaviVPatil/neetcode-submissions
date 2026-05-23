class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        for i in range(len(numbers)):
            num = target - numbers[i]
            print(i+1, num,"i+1, num")
            if num + numbers[i] == target and num in numbers:
                print(num,"num")
                index = numbers.index(num)
                return[i+1, index+1]

            
