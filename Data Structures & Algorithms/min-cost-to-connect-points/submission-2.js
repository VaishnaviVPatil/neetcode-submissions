class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        let adj = new Map() 
        let len = points.length

        for (let i = 0; i < len; i++) {
            adj.set(i, []);
        }

        for(let i = 0; i<len; i++){ 
            let [x1,y1] = points[i]
            for(let j = i +1; j<len;j++){ 
                const[x2, y2] = points[j]
                const dist = Math.abs(x1-x2) + Math.abs(y1-y2)
                adj.get(i).push([dist,j])
                adj.get(j).push([dist,i])
            }
        }

        let res = 0
        const visited = new Set()               // to keep track of visited edges
        const minHeap = new MinPriorityQueue(entry => entry[0]) // to keep track of the weight and
        minHeap.push([0,0])

        while(visited.size < len){
            const [cost, i] = minHeap.pop()
            if(visited.has(i)) continue
            res += cost
            visited.add(i)
            for(const [neiCost, nei] of adj.get(i)){
                if(!visited.has(nei)) minHeap.push([neiCost, nei])
            }
        } 

        return res
    }
}
