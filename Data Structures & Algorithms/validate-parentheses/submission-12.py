class Solution:
    def isValid(self, s: str) -> bool:
        bracket_list = {"[":"]", "(":")", "{":"}"}
        check_stack = []
        for i in range(len(s)): 
            if s[i] in bracket_list:  
                check_stack.append(s[i])
                print(check_stack)
            else: 
                if not check_stack:
                    return False
             
                top = check_stack.pop()
                if bracket_list[top] != s[i]: 
                    return False
                    
                
        print(check_stack)
        return not check_stack 