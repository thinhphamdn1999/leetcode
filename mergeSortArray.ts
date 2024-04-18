function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let index = 0;
	const resultArr = [];
	nums1 = nums1.slice(0, m);
	nums1.push(Number.MAX_SAFE_INTEGER);
	nums2.push(Number.MAX_SAFE_INTEGER);
	let nums1Index = 0;
	let nums2Index = 0;
	while (index < m + n) {
		if (nums1[nums1Index] < nums2[nums2Index]) {
			resultArr.push(nums1[nums1Index]);
			nums1Index++;
		} else {
			resultArr.push(nums2[nums2Index]);
			nums2Index++;
		}
		index++;
	}

	nums1 = resultArr;
	console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
