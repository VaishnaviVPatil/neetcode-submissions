class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {

        const stoneHeap = new MaxPriorityQueue()
        for(const stone of stones){
            stoneHeap.enqueue(stone)
        }

        while(stoneHeap.size() > 1){
            let stone1 = stoneHeap.dequeue()
            let stone2 = stoneHeap.dequeue()
            if(stone1 !== stone2){ 
                let newLarge = stone1 - stone2
                stoneHeap.enqueue(newLarge)
            } 
        }

        return stoneHeap.size()  === 1 ? stoneHeap.dequeue() : 0
    }
}
