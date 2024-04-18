import { TreeNode } from './types/tree';

function isMirrorTree(leftTreeRoot: TreeNode | null, rightTreeRoot: TreeNode | null) {
	const leftTreeQueue = [];
	const rightTreeQueue = [];
	let leftTreeNode: TreeNode | null;
	let rightTreeNode: TreeNode | null;
	leftTreeQueue.unshift(leftTreeRoot);
	rightTreeQueue.unshift(rightTreeRoot);

	while (leftTreeQueue.length > 0 && rightTreeQueue.length > 0) {
		leftTreeNode = leftTreeQueue.pop();
		rightTreeNode = rightTreeQueue.pop();

		if (!leftTreeNode?.left) leftTreeNode.left = null;
		if (!leftTreeNode?.right) leftTreeNode.right = null;
		if (!rightTreeNode?.right) rightTreeNode.right = null;
		if (!rightTreeNode?.left) rightTreeNode.left = null;

		if (
			leftTreeNode?.left?.val !== rightTreeNode?.right?.val ||
			leftTreeNode?.right?.val !== rightTreeNode?.left?.val
		) {
			return false;
		}

		if (leftTreeNode?.left) {
			leftTreeQueue.unshift(leftTreeNode.left);
		}

		if (leftTreeNode?.right) {
			leftTreeQueue.unshift(leftTreeNode.right);
		}

    if (rightTreeNode?.right) {
			rightTreeQueue.unshift(rightTreeNode.right);
		}

		if (rightTreeNode?.left) {
			rightTreeQueue.unshift(rightTreeNode.left);
		}
	}

	if (leftTreeQueue.length > 0 || rightTreeQueue.length > 0) {
		return false;
	}

	return true;
}

function isSymmetric(root: TreeNode | null): boolean {
	if (!root?.left && !root.right) {
		return true;
	}

	if (root?.left?.val !== root?.right?.val) {
		return false;
	}

	return isMirrorTree(root?.left, root?.right);
}

const p = new TreeNode(2);
p.left = new TreeNode(3);
p.left.left = new TreeNode(4);
p.left.right = new TreeNode(5);
p.left.left.left = null;
p.left.left.right = null;
p.left.right.left = new TreeNode(8);
p.left.right.right = new TreeNode(9);
p.right = new TreeNode(3);
p.right.left = new TreeNode(5);
p.right.right = new TreeNode(4);
p.right.left.left = new TreeNode(9);
p.right.left.right = new TreeNode(8);

console.log(isSymmetric(p));
