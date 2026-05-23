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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let pi= 0; 
        let ii = 0

        function dfs(limit){
            if(pi >= preorder.length) return null
            if(inorder[ii] === limit){
                ii++
                return null
            }

            let root = new TreeNode(preorder[pi++])
            root.left = dfs(root.val)
            root.right = dfs(limit)
            return root
        }

        return dfs(Infinity);
    }
}
