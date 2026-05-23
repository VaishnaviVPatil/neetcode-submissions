class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let array =  matrix.flat()
        if(array.length < 4 && array.indexOf(target) != -1){
            return true
        } 
        console.log(array)
        let left = 0, right = array.length -1

        while(left<= right){
            let mid = Math.floor(left + (right - left))

            if(target === array[mid]) return true
            else if(array[mid] < target) left = mid + 1
            else right = mid -1
        }
        return false
    }
}
