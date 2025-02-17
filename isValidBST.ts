import { TreeNode } from './types/tree';

function isValidBST(root: TreeNode | null): boolean {
	const queue = [];
	let currentNode = root;
	queue.push(currentNode);

	while (queue.length > 0) {
		currentNode = queue.shift();
		if (currentNode.left !== null) {
			if (
				currentNode.val <= currentNode.left.val ||
				!compareWithTreeValue(currentNode.left, currentNode.val, true)
			) {
				return false;
			}

			queue.push(currentNode.left);
		}

		if (currentNode.right !== null) {
			if (
				currentNode.val >= currentNode.right.val ||
				!compareWithTreeValue(currentNode.right, currentNode.val, false)
			) {
				return false;
			}

			queue.push(currentNode.right);
		}
	}

	return true;
}

function compareWithTreeValue(node: TreeNode, value: number, isLeft: boolean) {
	const list = traverseInOrder(node, []);
	const result = list.every((number) => (isLeft ? value > number : value < number));

	return result;
}

function traverseInOrder(node: TreeNode, list: number[]) {
	if (node.left) {
		traverseInOrder(node.left, list);
	}
	list.push(node.val);
	if (node.right) {
		traverseInOrder(node.right, list);
	}

	return list;
}

function isValidBSTOptimizeSolution(root: TreeNode | null) {
	return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function dfs(root: TreeNode | null, left: number, right: number) {
	if (!root) return true;

	if (!(left < root.val && right > root.val)) return false;

	return dfs(root.left, left, root.val) && dfs(root.right, root.val, right);
}

const p = new TreeNode(5);
p.left = new TreeNode(4);
p.right = new TreeNode(6);
p.right.left = new TreeNode(3);
p.right.right = new TreeNode(7);

console.log(isValidBSTOptimizeSolution(p));
