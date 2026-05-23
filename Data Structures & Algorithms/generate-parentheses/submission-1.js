class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    backtrack(openB, closedB, n, output, stack){
            if(openB === closedB && openB === n){
                output.push(stack)
                return
            }

            if(openB < n){
                this.backtrack(openB+1, closedB, n, output, stack + "(")
            }
            if(closedB < openB){
                this.backtrack(openB, closedB+1, n, output, stack + ")")
            }
    }

    generateParenthesis(n) { 
        const output = []
        this.backtrack(0,0,n,output,"");
        return output
    }
}
