/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        let res = []
        if(!root) return []

        const q = new Queue()
        q.push(root)

        while(!q.isEmpty()){
            let rightSide = null
            const qLen = q.size();

            for(let i=0; i<qLen;i++){
                let leaf = q.pop()
                if(leaf!=null){
                    rightSide = leaf
                    q.push(leaf.left)
                    q.push(leaf.right)
                }
            }
            if(rightSide) res.push(rightSide.val)
        }
        return res
    }
}
