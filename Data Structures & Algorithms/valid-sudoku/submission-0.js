class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = new Map();
        const col = new Map();
        const grid = new Map();

        for(let a = 0; a < 9; a++){
            for(let b = 0; b < 9; b++){
                if (board[a][b] === '.') continue
                
                const squareKey = `${Math.floor(a / 3)},${Math.floor(b / 3)}`;

                if((row.get(a) && row.get(a).has(board[a][b])) ||
                    (col.get(b) && col.get(b).has(board[a][b])) ||
                    (grid.get(squareKey) && grid.get(squareKey).has(board[a][b]))
                ){
                    return false
                }

                if(!row.has(a)) row.set(a, new Set());
                if(!col.has(b)) col.set(b, new Set());
                if(!grid.has(squareKey)) grid.set(squareKey, new Set());

                row.get(a).add(board[a][b]);
                col.get(b).add(board[a][b]);
                grid.get(squareKey).add(board[a][b]);
            }
        }
        return true
    }
}
