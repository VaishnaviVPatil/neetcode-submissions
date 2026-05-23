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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let newHead = head
        while(newHead){
            let temp = newHead.next
            newHead.next = prev
            prev = newHead
            newHead = temp
        }
        return prev
    }
}
