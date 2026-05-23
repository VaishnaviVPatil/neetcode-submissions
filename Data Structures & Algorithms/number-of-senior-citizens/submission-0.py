class Solution:
    def countSeniors(self, details: List[str]) -> int:
        old = 0
        for i in range(len(details)):
            if int(details[i][11]+details[i][12]) > 60:
               old += 1

        return old   