class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let array = nums1.concat(nums2)
        array.sort((a,b) => a-b)

        const len = array.length

        if(len % 2 === 0){
            return (array[len / 2 -1] + array[len/2]) / 2.0
        }else{
            return array[Math.floor(len / 2)];
        }
    }
}
