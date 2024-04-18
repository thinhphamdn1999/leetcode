/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
	const length = nums.length;
	const rotateArray = new Array(length);

	if (k > length && length <= 1) {
		return;
	}

	nums.forEach((num, index) => {
		let rotateArrayIndex = index + k % length;
		if (rotateArrayIndex >= length) {
			rotateArrayIndex -= length;
		}
		rotateArray[rotateArrayIndex] = num;
	});

	console.log(rotateArray);
}

console.log(rotate([1,2], 3));

/**
 Do not return anything, modify nums in-place instead.
 */
 function rotateInPlace(nums: number[], k: number): void {
	const length = nums.length;
	const rotateArray = new Array(length);

	

	console.log(rotateArray);
}
