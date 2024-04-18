import { TreeNode } from './types/tree';

function invertTree(root: TreeNode | null): TreeNode | null {
	if (!root) {
		return null;
	}

	const queue: TreeNode[] = [];
	queue.unshift(root);
	let node: TreeNode;

	while (queue.length > 0) {
		node = queue.pop();

		// Swap object
		const tmpNode = structuredClone(node?.left);
		node.left = structuredClone(node.right);
		node.right = structuredClone(tmpNode);

		if (node?.left) {
			queue.unshift(node.left);
		}

		if (node?.right) {
			queue.unshift(node.right);
		}
	}

	return root;
}

const p = new TreeNode(1);
p.left = new TreeNode(2);
p.left.left = new TreeNode(1);
p.left.right = new TreeNode(3);
p.right = new TreeNode(7);
p.right.left = new TreeNode(3);
p.right.right = new TreeNode(1);

const root = new TreeNode(1);
root.left = new TreeNode(2);

console.log(invertTree(root));
