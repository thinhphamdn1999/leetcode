function majorityElement(nums) {
    nums.sort();
    return nums[Math.floor(nums.length / 2)];
}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
//# sourceMappingURL=majorityElement.js.map