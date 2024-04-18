import { TreeNode } from './types/tree';

function findMaxDepth(node: TreeNode): number {
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

function maxDepth(root: TreeNode | null): number {
	return findMaxDepth(root);
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.left.left = null;
root.left.right = null;
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root));
