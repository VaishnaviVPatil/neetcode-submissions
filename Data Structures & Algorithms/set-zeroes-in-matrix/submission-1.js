class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        
        const COLS = matrix[0].length
        const ROWS = matrix.length 
        const R = Array(ROWS).fill(false)
        const C = Array(COLS).fill(false)

        for(let i = 0; i<ROWS; i++){
            for(let j = 0; j<COLS; j++){
                if(matrix[i][j] === 0){
                    R[i] = true
                    C[j] = true
                }
            }
        }

        for(let i = 0; i<ROWS; i++){
            for(let j = 0; j<COLS; j++){
                if(R[i] || C[j]){
                    matrix[i][j] = 0
                }
            }
        } 
    }
}
