import { TreeNode } from './types/tree';

function originalBFS(root: TreeNode | null) {
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

function findSameTreeBFS(firstTree: TreeNode | null, secondTree: TreeNode | null) {
	const firstTreeQueue = [];
	const secondTreeQueue = [];
	firstTreeQueue.unshift(firstTree);
	secondTreeQueue.unshift(secondTree);
	let firstTreeNode: TreeNode;
	let secondTreeNode: TreeNode;
	let sameTree;

	while (firstTreeQueue.length !== 0 && secondTreeQueue.length !== 0) {
		firstTreeNode = firstTreeQueue.pop();
		secondTreeNode = secondTreeQueue.pop();

		sameTree =
			firstTreeNode?.val === secondTreeNode?.val &&
			firstTreeNode?.left?.val === secondTreeNode?.left?.val &&
			firstTreeNode?.right?.val === secondTreeNode?.right?.val;

		if (!sameTree) {
			return false;
		}

		if (!!firstTreeNode?.left) {
			firstTreeQueue.unshift(firstTreeNode.left);
		}

		if (!!firstTreeNode?.right) {
			firstTreeQueue.unshift(firstTreeNode.right);
		}

		if (!!secondTreeNode?.left) {
			secondTreeQueue.unshift(secondTreeNode.left);
		}

		if (!!secondTreeNode?.right) {
			secondTreeQueue.unshift(secondTreeNode.right);
		}
	}

	if (firstTreeQueue.length > 0 || secondTreeQueue.length > 0) {
		return false;
	}

	return true;
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	return findSameTreeBFS(p, q);
}

const p = new TreeNode(1);
p.left = new TreeNode(null);
p.right = new TreeNode(2);
p.right.left = new TreeNode(3);

const q = new TreeNode(1);
q.left = new TreeNode(null);
q.right = new TreeNode(2);
q.right.left = new TreeNode(null);
q.right.right = new TreeNode(3);

console.log(isSameTree(p, q));
