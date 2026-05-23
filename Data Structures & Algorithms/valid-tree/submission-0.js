class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length > n-1) return false

        const adj = Array.from({length: n}, () => [])
        const visited = new Set()

        for(let [u, v] of edges){
            adj[v].push(u)
            adj[u].push(v)
        } 

        const dfs = (node, parent) => {
            if(visited.has(node)) return false 
            visited.add(node)
             
            for(let nei of adj[node]){
                if(nei === parent) continue
                if(!dfs(nei, node)) return false
            }
            return true
        }
        
        return dfs(0,-1) && visited.size === n
    }
}
