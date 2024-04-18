"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("./types/tree");
function isMirrorTree(leftTreeRoot, rightTreeRoot) {
    var _a, _b, _c, _d;
    const leftTreeQueue = [];
    const rightTreeQueue = [];
    let leftTreeNode;
    let rightTreeNode;
    leftTreeQueue.unshift(leftTreeRoot);
    rightTreeQueue.unshift(rightTreeRoot);
    while (leftTreeQueue.length > 0 && rightTreeQueue.length > 0) {
        leftTreeNode = leftTreeQueue.pop();
        rightTreeNode = rightTreeQueue.pop();
        if (!(leftTreeNode === null || leftTreeNode === void 0 ? void 0 : leftTreeNode.left))
            leftTreeNode.left = null;
        if (!(leftTreeNode === null || leftTreeNode === void 0 ? void 0 : leftTreeNode.right))
            leftTreeNode.right = null;
        if (!(rightTreeNode === null || rightTreeNode === void 0 ? void 0 : rightTreeNode.right))
            rightTreeNode.right = null;
        if (!(rightTreeNode === null || rightTreeNode === void 0 ? void 0 : rightTreeNode.left))
            rightTreeNode.left = null;
        if (((_a = leftTreeNode === null || leftTreeNode === void 0 ? void 0 : leftTreeNode.left) === null || _a === void 0 ? void 0 : _a.val) !== ((_b = rightTreeNode === null || rightTreeNode === void 0 ? void 0 : rightTreeNode.right) === null || _b === void 0 ? void 0 : _b.val) ||
            ((_c = leftTreeNode === null || leftTreeNode === void 0 ? void 0 : leftTreeNode.right) === null || _c === void 0 ? void 0 : _c.val) !== ((_d = rightTreeNode === null || rightTreeNode === void 0 ? void 0 : rightTreeNode.left) === null || _d === void 0 ? void 0 : _d.val)) {
            return false;
        }
        if (leftTreeNode === null || leftTreeNode === void 0 ? void 0 : leftTreeNode.left) {
            leftTreeQueue.unshift(leftTreeNode.left);
        }
        if (leftTreeNode === null || leftTreeNode === void 0 ? void 0 : leftTreeNode.right) {
            leftTreeQueue.unshift(leftTreeNode.right);
        }
        if (rightTreeNode === null || rightTreeNode === void 0 ? void 0 : rightTreeNode.right) {
            rightTreeQueue.unshift(rightTreeNode.right);
        }
        if (rightTreeNode === null || rightTreeNode === void 0 ? void 0 : rightTreeNode.left) {
            rightTreeQueue.unshift(rightTreeNode.left);
        }
    }
    if (leftTreeQueue.length > 0 || rightTreeQueue.length > 0) {
        return false;
    }
    return true;
}
function isSymmetric(root) {
    var _a, _b;
    if (!(root === null || root === void 0 ? void 0 : root.left) && !root.right) {
        return true;
    }
    if (((_a = root === null || root === void 0 ? void 0 : root.left) === null || _a === void 0 ? void 0 : _a.val) !== ((_b = root === null || root === void 0 ? void 0 : root.right) === null || _b === void 0 ? void 0 : _b.val)) {
        return false;
    }
    return isMirrorTree(root === null || root === void 0 ? void 0 : root.left, root === null || root === void 0 ? void 0 : root.right);
}
const p = new tree_1.TreeNode(2);
p.left = new tree_1.TreeNode(3);
p.left.left = new tree_1.TreeNode(4);
p.left.right = new tree_1.TreeNode(5);
p.left.left.left = null;
p.left.left.right = null;
p.left.right.left = new tree_1.TreeNode(8);
p.left.right.right = new tree_1.TreeNode(9);
p.right = new tree_1.TreeNode(3);
p.right.left = new tree_1.TreeNode(5);
p.right.right = new tree_1.TreeNode(4);
p.right.left.left = new tree_1.TreeNode(9);
p.right.left.right = new tree_1.TreeNode(8);
console.log(isSymmetric(p));
//# sourceMappingURL=symmetricTree.js.map