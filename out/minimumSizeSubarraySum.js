function minSubArrayLen(target, nums) {
    const numbersLength = nums.length;
    let left = 0;
    let right = -1;
    let minLength = Number.MAX_SAFE_INTEGER;
    let minSumLargerThanTarget = 0;
    while (right < numbersLength) {
        if (minSumLargerThanTarget < target) {
            right++;
            minSumLargerThanTarget += nums[right];
        }
        if (minSumLargerThanTarget >= target) {
            minLength = Math.min(minLength, right - left + 1);
            minSumLargerThanTarget -= nums[left];
            if (left >= right) {
                right++;
            }
            left++;
        }
    }
    return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
}
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
//# sourceMappingURL=minimumSizeSubarraySum.js.map