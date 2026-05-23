class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        let stack = []

        for(let i = 0; i< heights.length; i++){
            let start = i
            while(stack.length > 0 && stack[stack.length -1][1] > heights[i]){
                const [ind, height] = stack.pop()
                maxArea = Math.max(maxArea, height * [i - ind])
                start = ind
            }
            stack.push([start, heights[i]])
        }

        for(const[ind, height] of stack){
            maxArea = Math.max(maxArea, height * (heights.length - ind))
        }
        return maxArea
    }
}
