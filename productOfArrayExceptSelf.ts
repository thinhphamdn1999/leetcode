function productExceptSelf(nums: number[]): number[] {
	const length = nums.length;
	const leftProducts = Array.from({ length }, (_, v) => 0);
	const rightProduct = Array.from({ length }, (_, v) => 0);
	const result = Array.from({ length }, (_, v) => 0);
	leftProducts[0] = nums[0];
	rightProduct[length - 1] = nums[length - 1];

	for (let index = 1; index < length; index++) {
		leftProducts[index] = leftProducts[index - 1] * nums[index];
	}

	for (let index = length - 2; index >= 0; index--) {
		rightProduct[index] = rightProduct[index + 1] * nums[index];
	}

	result[0] = rightProduct[1];

	for (let index = 1; index < length - 1; index++) {
		result[index] = leftProducts[index - 1] * rightProduct[index + 1];
	}

	result[length - 1] = leftProducts[length - 2];

	return result;
}

/**
 * O(1) space solution
 * @param nums
 * @returns
 */
function productExceptSelfV2(nums: number[]): number[] {
	const length = nums.length;
	const result = Array.from({ length }, (_, v) => 1);
	let currentProduct = nums[0];

	for (let index = 1; index < length; index++) {
		result[index] = currentProduct;
		currentProduct *= nums[index];
	}

	currentProduct = nums[length - 1];
	for (let index = length - 2; index >= 0; index--) {
		result[index] = result[index] * currentProduct;
		currentProduct *= nums[index];
	}

	return result;
}

console.log(productExceptSelfV2([1, 2, 3, 4]));
