/**
 * Find the array have maximum duplicated number is 2
 * @param nums the input array
 * @returns
 */
function removeDuplicates(nums) {
    let resultIndex = 0;
    let index = 1;
    let repeat = 1;
    while (index < nums.length) {
        if (nums[index] === nums[index - 1]) {
            repeat++;
        }
        else {
            repeat = 1;
        }
        // Increase the index of result array when the repetition of number <= 2
        // To find the last index will be replace when meet an another number
        if (repeat <= 2) {
            nums[++resultIndex] = nums[index];
        }
        index++;
    }
    console.log(nums);
    // The length of result array is the last index of the result + 1
    return resultIndex + 1;
}
removeDuplicates([-1, 0, 0, 0, 0, 3, 3]);
//# sourceMappingURL=removeDuplicatesFromSortedArrayII.js.map