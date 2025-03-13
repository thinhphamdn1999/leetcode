/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]
*/

function permuteHelper(
	nums: number[],
	start: number,
	result: number[][]
): void {
	if (start === nums.length) {
		result.push([...nums]);
	}

	for (let i = start; i < nums.length; i++) {
		[nums[start], nums[i]] = [nums[i], nums[start]];
		permuteHelper(nums, start + 1, result);
		[nums[start], nums[i]] = [nums[i], nums[start]];
	}
}

function recursivePermute(
  nums: number[],
  result: number[][],
  current: number[]
): void {
  if (current.length === nums.length) {
    result.push([...current]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (current.includes(nums[i])) {
			continue;
		}

    current.push(nums[i]);
    recursivePermute(nums, result, current);
    current.pop();
  }
}

function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  recursivePermute(nums, result, []);
  return result;
}

// Test cases
console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]
