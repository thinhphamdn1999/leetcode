/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5


*/



/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "./types/tree";

function minDepth(root: TreeNode | null): number {
  // Base case: if the tree is empty, return 0
  if (root === null) {
    return 0;
  }

  // If one of the children is null, return the depth of the other child
  if (root.left === null) {
    return minDepth(root.right) + 1;
  }

  if (root.right === null) {
    return minDepth(root.left) + 1;
  }

  // If both children are not null, return the minimum depth of the two children
  // and add 1 for the current node
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1; 
};

function minDepthWithoutRecursion(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const queue: TreeNode[] = [root];
  let depth = 1;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;

      // Check if the current node is a leaf node
      if (node.left === null && node.right === null) {
        return depth;
      }

      // Add the left child to the queue if it exists
      if (node.left !== null) {
        queue.push(node.left);
      }

      // Add the right child to the queue if it exists
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    depth++;
  }

  return depth;
}
