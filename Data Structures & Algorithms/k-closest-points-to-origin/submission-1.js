class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const pointQueue = new PriorityQueue((a, b) => b[0] - a[0]);

        for(let point of points){
            let [x, y] = point 
            let eucD  = x**2 + y**2
            pointQueue.enqueue([eucD, point])
            
            if(pointQueue.size() > k){
                pointQueue.dequeue()
            }
        } 
        
        let res = []
        while(pointQueue.size() > 0){
            let closestPoint = pointQueue.dequeue()[1]; 
            res.push(closestPoint)
        }
        return res
    }
}
