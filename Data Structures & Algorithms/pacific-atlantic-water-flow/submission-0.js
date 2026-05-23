class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length, COLS = heights[0].length;
        let pac = Array.from({ length: ROWS }, () => 
                  Array(COLS).fill(false));
        let atl = Array.from({ length: ROWS }, () => 
                  Array(COLS).fill(false));

        const dfs = (r,c,ocean) => {
            ocean[r][c] = true
            let directions = [[1,0], [0,1],[-1,0], [0,-1]]
            for(let [dr, dc] of directions){
                let nr = dr+r
                let nc = dc+c
                if(nc >=0 && nr >= 0 && nr < ROWS && nc < COLS && !ocean[nr][nc] &&
                heights[nr][nc] >= heights[r][c]){
                    dfs(nr, nc, ocean)
                }
            }
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pac);
            dfs(ROWS - 1, c, atl);
        }
        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pac);
            dfs(r, COLS - 1, atl);
        }

        let res = []
        for(let i = 0; i< ROWS;i++){
            for(let j = 0; j<COLS;j++){
                if(pac[i][j] && atl[i][j]){
                    res.push([i,j])
                }
            }
        }

        return res
    }
}
