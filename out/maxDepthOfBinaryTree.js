"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("./types/tree");
function findMaxDepth(node) {
    if (!node) {
        return 0;
    }
    const leftHeight = findMaxDepth(node.left);
    const rightHeight = findMaxDepth(node.right);
    if (leftHeight > rightHeight) {
        return leftHeight + 1;
    }
    return rightHeight + 1;
}
function maxDepth(root) {
    return findMaxDepth(root);
}
const root = new tree_1.TreeNode(3);
root.left = new tree_1.TreeNode(9);
root.left.left = null;
root.left.right = null;
root.right = new tree_1.TreeNode(20);
root.right.left = new tree_1.TreeNode(15);
root.right.right = new tree_1.TreeNode(7);
console.log(maxDepth(root));
//# sourceMappingURL=maxDepthOfBinaryTree.js.map