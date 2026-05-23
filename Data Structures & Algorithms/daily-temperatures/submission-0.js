class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let output = new Array(temperatures.length).fill(0)
        let stack = []
        for(let i = 0; i<temperatures.length; i++){
            let temp = temperatures[i]
            while(stack.length > 0 && temp > stack[stack.length - 1][0]){
                const[temp, int] = stack.pop()
                output[int] = i - int
            }
            stack.push([temp, i])
        }
        return output
    }
}
