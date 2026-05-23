class Solution:
    def isPalindrome(self, s: str) -> bool:
        str1 = s.split()
        str2 = "".join(str1)
        str3 = "".join([c.lower() for c in str2 if c.isalnum()])
        

        print(str3)
        if str3[::-1] == str3:
            return True
        else:
            return False