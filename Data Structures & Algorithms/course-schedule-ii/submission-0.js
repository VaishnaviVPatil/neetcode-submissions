class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let preMap = new Map()
        let visited = new Set()
        const cycle = new Set();
        let res = []
        for(let i = 0; i< numCourses; i++){
            preMap.set(i,[])
        }
        for(let [crs, pre] of prerequisites){
            preMap.get(crs).push(pre)
        }

        const dfs = (crs) => { 
            if(visited.has(crs)) return true
            if(cycle.has(crs)) return false

            cycle.add(crs)
            for(const pre of preMap.get(crs) || []){
                if(!dfs(pre)) return 
            }
            cycle.delete(crs)
            visited.add(crs)
            res.push(crs)
            return true
        }

        for(let c = 0; c < numCourses; c++){
            if(!dfs(c)) return []
        }
        return res
    }
}
