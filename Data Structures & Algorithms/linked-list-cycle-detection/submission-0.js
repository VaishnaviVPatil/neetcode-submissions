/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let dummy = head
        let curr = head

        while(curr !== null && curr.next !== null){
            curr = curr.next.next
            dummy = dummy.next

            if(curr === dummy){
                return true
            }
        }
        return false
    }
}
