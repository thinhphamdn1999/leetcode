const deepEqual = function (x, y) {
	if (x === y) {
		return true;
	} else if (
		typeof x == 'object' &&
		x != null &&
		typeof y == 'object' &&
		y != null
	) {
		if (Object.keys(x).length != Object.keys(y).length) return false;

		for (let prop in x) {
			if (y.hasOwnProperty(prop)) {
				if (!deepEqual(x[prop], y[prop])) return false;
			} else return false;
		}

		return true;
	} else return false;
};

function rotateLeft(nums: number[], k: number): void {
	k = k % nums.length; // Handle cases where k is greater than the length of the array
	const n = nums.length;

	const reverse = (arr: number[], start: number, end: number): void => {
		while (start < end) {
			// Swap elements at start and end indices
			[arr[start], arr[end]] = [arr[end], arr[start]];
			start++;
			end--;
		}
	};

	// Reverse the entire array
	reverse(nums, 0, n - 1);
	// Reverse the first k elements
	reverse(nums, 0, k - 1);
	// Reverse the remaining n-k elements
	reverse(nums, k, n - 1);
}
