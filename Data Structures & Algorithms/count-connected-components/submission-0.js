class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = Array.from({length: n}, () => [])
        const visited = new Array(n).fill(false)
        let res = 0

        for(let [u, v] of edges){
            adj[u].push(v)
            adj[v].push(u)
        }

        const dfs = (node) => {
            for(const nei of adj[node]){
                if(!visited[nei]){
                    visited[nei] = true
                    dfs(nei)
                }
            }
        }

        for(let node = 0; node < n; node++){
            if(!visited[node]){
                visited[node] = true
                dfs(node)
                res++
            }
        }

        return res
        
    }
}
