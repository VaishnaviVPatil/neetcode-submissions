class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const q = []
        let fresh = 0
        let time = 0

        for(let i = 0; i<grid.length; i++){
            for(let j = 0; j<grid[0].length; j++){
                if(grid[i][j] === 1){
                    fresh++
                }else if(grid[i][j] === 2){
                    q.push([i,j])
                }
            }
        }

        let directions = [[1,0], [0,1], [0,-1],[-1,0]]
        while(q.length > 0 && fresh > 0){
            let len = q.length
            for(let i = 0; i<len;i++){
                const [currR, currC] = q.shift()
                for(const [dr, dc] of directions){
                    const row = dr + currR
                    const col = dc + currC
                    if (row >= 0 && row < grid.length &&
                        col >= 0 && col < grid[0].length &&
                        grid[row][col] === 1) {
                        grid[row][col] = 2;
                        q.push([row, col])
                        fresh--
                    }
                }
            }
            time++
        }
        return fresh === 0 ? time : -1
    }
}
