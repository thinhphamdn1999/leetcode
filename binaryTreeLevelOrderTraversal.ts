/*
  Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
  
  Example 1:
  Input: root = [3,9,20,null,null,15,7]
  Output: [[3],[9,20],[15,7]]
  
  Example 2:
  Input: root = [1]
  Output: [[1]]
  
  Example 3:
  Input: root = []
  Output: []

*/

import { TreeNode } from "./types/tree";


function levelOrder(root: TreeNode | null): number[][] {
  const queue = [root];
  const result = [];

  while (queue.length) {
    const length = queue.length;
    const currentLevel = [];

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (node) {
        currentLevel.push(node.val);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }

    if (currentLevel.length) {
      result.push(currentLevel);
    }
  }

  return result;
};

// Time: O(N)
// Space: O(N)
console.log(levelOrder({
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
})); // [[3],[9,20],[15,7]]
