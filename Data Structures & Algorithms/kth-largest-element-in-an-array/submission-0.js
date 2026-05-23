class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const numHeap = new MinPriorityQueue()

        for(let num of nums){
            numHeap.enqueue(num)
            if(numHeap.size() > k){
                numHeap.dequeue()
            }
        }
 
        while(numHeap.size() > 0){
            return numHeap.dequeue()
        }
    }
}
