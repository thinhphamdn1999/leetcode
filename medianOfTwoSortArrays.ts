function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	const sortMergeArr = [];
	const length = nums1.length + nums2.length;
	let indexNum1 = 0;
	let indexNum2 = 0;
	let index = 0;

	while (index < length) {
		if (nums1[indexNum1] < nums2[indexNum2] || indexNum2 >= nums2.length) {
			sortMergeArr.push(nums1[indexNum1]);
			indexNum1++;
		} else {
			sortMergeArr.push(nums2[indexNum2]);
			indexNum2++;
		}
		index++;
	}

	const mid = Math.floor(length / 2);

	if (length % 2 === 0) {
		return (sortMergeArr[mid - 1] + sortMergeArr[mid]) / 2;
	}

	return sortMergeArr[mid];
}

console.log(findMedianSortedArrays([1, 2], [3, 4]));
