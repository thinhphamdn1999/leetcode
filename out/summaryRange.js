function summaryRanges(nums) {
    if (nums.length === 0) {
        return [];
    }
    if (nums.length === 1) {
        return [`${nums[0]}`];
    }
    const result = [];
    let first = `${nums[0]}`;
    let last = '';
    let range = '';
    for (let index = 1; index < nums.length; index++) {
        if (nums[index - 1] + 1 === nums[index]) {
            last = `${nums[index]}`;
        }
        else {
            range = last ? `${first}->${last}` : `${first}`;
            result.push(range);
            first = `${nums[index]}`;
            last = '';
            range = '';
        }
    }
    if (last) {
        result.push(`${first}->${last}`);
    }
    else {
        result.push(`${first}`);
    }
    return result;
}
console.log(summaryRanges([1]));
//# sourceMappingURL=summaryRange.js.map