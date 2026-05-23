/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const NEW = new Map()
        return this.dfs(node, NEW);
    }

    dfs = (node, NEW) =>{
        if(node === null) return null
        if(NEW.has(node)) return NEW.get(node)

        const copy = new Node(node.val);
        NEW.set(node, copy)

        for(const bitch of node.neighbors){
            copy.neighbors.push(this.dfs(bitch, NEW))
        }

        return copy
    }
}