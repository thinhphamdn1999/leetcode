"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("./types/tree");
function originalBFS(root) {
    const queue = [];
    queue.unshift(root);
    let node;
    while (queue.length !== 0) {
        node = queue.pop();
        if (!!node.left) {
            queue.unshift(node.left);
        }
        if (!!node.right) {
            queue.unshift(node.right);
        }
    }
}
function findSameTreeBFS(firstTree, secondTree) {
    var _a, _b, _c, _d;
    const firstTreeQueue = [];
    const secondTreeQueue = [];
    firstTreeQueue.unshift(firstTree);
    secondTreeQueue.unshift(secondTree);
    let firstTreeNode;
    let secondTreeNode;
    let sameTree;
    while (firstTreeQueue.length !== 0 && secondTreeQueue.length !== 0) {
        firstTreeNode = firstTreeQueue.pop();
        secondTreeNode = secondTreeQueue.pop();
        sameTree =
            (firstTreeNode === null || firstTreeNode === void 0 ? void 0 : firstTreeNode.val) === (secondTreeNode === null || secondTreeNode === void 0 ? void 0 : secondTreeNode.val) &&
                ((_a = firstTreeNode === null || firstTreeNode === void 0 ? void 0 : firstTreeNode.left) === null || _a === void 0 ? void 0 : _a.val) === ((_b = secondTreeNode === null || secondTreeNode === void 0 ? void 0 : secondTreeNode.left) === null || _b === void 0 ? void 0 : _b.val) &&
                ((_c = firstTreeNode === null || firstTreeNode === void 0 ? void 0 : firstTreeNode.right) === null || _c === void 0 ? void 0 : _c.val) === ((_d = secondTreeNode === null || secondTreeNode === void 0 ? void 0 : secondTreeNode.right) === null || _d === void 0 ? void 0 : _d.val);
        if (!sameTree) {
            return false;
        }
        if (!!(firstTreeNode === null || firstTreeNode === void 0 ? void 0 : firstTreeNode.left)) {
            firstTreeQueue.unshift(firstTreeNode.left);
        }
        if (!!(firstTreeNode === null || firstTreeNode === void 0 ? void 0 : firstTreeNode.right)) {
            firstTreeQueue.unshift(firstTreeNode.right);
        }
        if (!!(secondTreeNode === null || secondTreeNode === void 0 ? void 0 : secondTreeNode.left)) {
            secondTreeQueue.unshift(secondTreeNode.left);
        }
        if (!!(secondTreeNode === null || secondTreeNode === void 0 ? void 0 : secondTreeNode.right)) {
            secondTreeQueue.unshift(secondTreeNode.right);
        }
    }
    if (firstTreeQueue.length > 0 || secondTreeQueue.length > 0) {
        return false;
    }
    return true;
}
function isSameTree(p, q) {
    return findSameTreeBFS(p, q);
}
const p = new tree_1.TreeNode(1);
p.left = new tree_1.TreeNode(null);
p.right = new tree_1.TreeNode(2);
p.right.left = new tree_1.TreeNode(3);
const q = new tree_1.TreeNode(1);
q.left = new tree_1.TreeNode(null);
q.right = new tree_1.TreeNode(2);
q.right.left = new tree_1.TreeNode(null);
q.right.right = new tree_1.TreeNode(3);
console.log(isSameTree(p, q));
//# sourceMappingURL=sameTree.js.map