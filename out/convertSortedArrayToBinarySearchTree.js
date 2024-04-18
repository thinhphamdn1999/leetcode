"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("./types/tree");
function sortedArrayToBST(nums) {
    const mid = Math.floor(nums.length / 2);
    const root = new tree_1.TreeNode(nums[mid]);
    const queue = [
        [root, [0, mid - 1]],
        [root, [mid + 1, nums.length - 1]]
    ];
    while (queue.length > 0) {
        const [parent, positions] = queue.shift();
        const [left, right] = positions;
        if (left <= right && parent !== null) {
            const subMidLength = Math.floor((left + right) / 2);
            const child = new tree_1.TreeNode(nums[subMidLength]);
            if (nums[subMidLength] > (parent === null || parent === void 0 ? void 0 : parent.val)) {
                parent.right = child;
            }
            else {
                parent.left = child;
            }
            queue.push([child, [left, subMidLength - 1]]);
            queue.push([child, [subMidLength + 1, right]]);
        }
    }
    return root;
}
// Recursion
function sortedArrayToBSTV2(nums) {
    if (nums.length === 0)
        return null;
    const center = Math.floor(nums.length / 2);
    return new tree_1.TreeNode(nums[center], sortedArrayToBST(nums.slice(0, center)), sortedArrayToBST(nums.slice(center + 1)));
}
console.log(sortedArrayToBST([1, 3]));
//# sourceMappingURL=convertSortedArrayToBinarySearchTree.js.map