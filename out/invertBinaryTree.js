"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("./types/tree");
function invertTree(root) {
    if (!root) {
        return null;
    }
    const queue = [];
    queue.unshift(root);
    let node;
    while (queue.length > 0) {
        node = queue.pop();
        // Swap object
        const tmpNode = structuredClone(node === null || node === void 0 ? void 0 : node.left);
        node.left = structuredClone(node.right);
        node.right = structuredClone(tmpNode);
        if (node === null || node === void 0 ? void 0 : node.left) {
            queue.unshift(node.left);
        }
        if (node === null || node === void 0 ? void 0 : node.right) {
            queue.unshift(node.right);
        }
    }
    return root;
}
const p = new tree_1.TreeNode(1);
p.left = new tree_1.TreeNode(2);
p.left.left = new tree_1.TreeNode(1);
p.left.right = new tree_1.TreeNode(3);
p.right = new tree_1.TreeNode(7);
p.right.left = new tree_1.TreeNode(3);
p.right.right = new tree_1.TreeNode(1);
const root = new tree_1.TreeNode(1);
root.left = new tree_1.TreeNode(2);
console.log(invertTree(root));
//# sourceMappingURL=invertBinaryTree.js.map