function twoSum(nums, target) {
    const seenNumber = {};
    for (let index = 0; index < nums.length; index++) {
        let differentWithCurrentNumber = target - nums[index];
        if (seenNumber[differentWithCurrentNumber] !== undefined) {
            return [index, seenNumber[differentWithCurrentNumber]];
        }
        seenNumber[nums[index]] = index;
    }
    return [];
}
console.log(twoSum([1, 2, 3, 4, 5], 7));
//# sourceMappingURL=twoSum.js.map