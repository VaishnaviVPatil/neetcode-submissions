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
     * @return {number}
     */
    goodNodes(root) {
        return this.dfs(root, root.val)
    }

    dfs(node, val){
        if(!node) return 0

        let res = node.val >= val ? 1 : 0
        val = Math.max(val, node.val)
        res += this.dfs(node.left, val)
        res += this.dfs(node.right, val)
        return res
    }
}
