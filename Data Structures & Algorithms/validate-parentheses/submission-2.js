class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) { 
        let stack = []
        let closetoopen = {
            "}" : "{", ")" : "(","]" : "[", 
        }

        for(let bracket of s){
            if(closetoopen[bracket]){
                if(stack.length > 0 && stack[stack.length-1] === closetoopen[bracket]){
                    stack.pop(bracket)
                }else{
                    return false
                }
            }else{
                stack.push(bracket)
            }
        }
        return stack.length === 0
    }
}
