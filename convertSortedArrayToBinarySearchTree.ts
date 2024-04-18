import { TreeNode } from './types/tree';

function sortedArrayToBST(nums: number[]): TreeNode | null {
	const mid = Math.floor(nums.length / 2);
	const root = new TreeNode(nums[mid]);

	const queue: Array<Array<TreeNode | Array<number>>> = [
		[root, [0, mid - 1]],
		[root, [mid + 1, nums.length - 1]]
	];

	while (queue.length > 0) {
		const [parent, positions] = queue.shift();
		const [left, right] = positions as Array<number>;

		if (left <= right && parent !== null) {
			const subMidLength = Math.floor((left + right) / 2);
			const child = new TreeNode(nums[subMidLength]);

			if (nums[subMidLength] > (parent as TreeNode)?.val) {
				(parent as TreeNode).right = child;
			} else {
				(parent as TreeNode).left = child;
			}

			queue.push([child, [left, subMidLength - 1]]);
			queue.push([child, [subMidLength + 1, right]]);
		}
	}

	return root;
}

// Recursion
function sortedArrayToBSTV2(nums: number[]): TreeNode | null {
	if (nums.length === 0) return null;
	const center = Math.floor(nums.length / 2);

	return new TreeNode(
		nums[center],
		sortedArrayToBST(nums.slice(0, center)),
		sortedArrayToBST(nums.slice(center + 1))
	);
}

console.log(sortedArrayToBST([1, 3]));
