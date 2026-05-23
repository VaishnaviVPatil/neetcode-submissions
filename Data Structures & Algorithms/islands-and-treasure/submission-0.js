class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const INF = 2147483647;
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

        const bfs = (r, c) => {
            const q = new Queue();
            q.push([r, c]);
            let visit = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
            visit[r][c] = true;
            let steps = 0;

            while (!q.isEmpty()) {
                let size = q.size();
                for (let i = 0; i < size; i++) {
                    const [row, col] = q.pop();
                    if (grid[row][col] === 0) return steps;

                    for (let [dr, dc] of directions) {
                        const nr = row + dr, nc = col + dc;
                        if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && !visit[nr][nc] && grid[nr][nc] !== -1) {
                            visit[nr][nc] = true;
                            q.push([nr, nc]);
                        }
                    }
                }
                steps++;
            }
            return INF;
        };

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === INF) {
                    grid[i][j] = bfs(i, j);
                }
            }
        }
    }
}
