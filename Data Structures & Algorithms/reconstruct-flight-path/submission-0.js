class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        let adj = new Map()

        tickets.sort()
        for(let [u,v] of tickets){
            if (!adj[u]) adj[u] = [];
            adj[u].push(v) 
        }

        let res = ["JFK"]
        const dfs = (src) => {
            if(res.length === tickets.length +1) return true
            if(!adj[src]) return false

            let temp = [...adj[src]]
            for(let i = 0; i<temp.length;i++){
                const v = temp[i]
                adj[src].splice(i, 1)
                res.push(v)
                if(dfs(v)) return true
                res.pop()
                adj[src].splice(i, 0, v)
            }
            return false
        }

        dfs("JFK")
        return res
    }
}
