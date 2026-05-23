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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if(!root) return "N"
        const res = []
        const q = new Queue()
        q.push(root)

        while(!q.isEmpty()){
            const leaf = q.pop()
            if(!leaf){
                res.push("N")
            }else{
                res.push(leaf.val)
                q.push(leaf.left)
                q.push(leaf.right)
            }
        }
        return res.join(",")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const val = data.split(",")
        if(val[0] === "N") return null 
        const root = new TreeNode(parseInt(val[0]))
        const q = new Queue([root])
        let i = 1

        while(!q.isEmpty()){
            let node = q.pop()
            if(val[i] !== "N"){
                node.left = new TreeNode(parseInt(val[i]))
                q.push(node.left)
            }
            i++
            if(val[i] !== "N"){
                node.right = new TreeNode(parseInt(val[i]))
                q.push(node.right)
            }
            i++
        }
        return root
    }
}
