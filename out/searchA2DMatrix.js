function searchMatrix(matrix, target) {
    const columnLength = matrix.length;
    const rowLength = matrix[0].length;
    let low = 0;
    let high = rowLength * columnLength - 1;
    let mid = Math.floor((low + high) / 2);
    let value = 0;
    while (low <= high) {
        value = matrix[Math.floor(mid / rowLength)][mid % rowLength];
        if (target === value) {
            return true;
        }
        if (target < value) {
            high = mid - 1;
        }
        if (target > value) {
            low = mid + 1;
        }
        mid = Math.floor((low + high) / 2);
    }
    return false;
}
console.log(searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
], 3));
//# sourceMappingURL=searchA2DMatrix.js.map