function isValidSudoku(board) {
    const columnMaps = Array.from({ length: 9 }, () => new Map());
    const rowMaps = Array.from({ length: 9 }, () => new Map());
    const blockMaps = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Map()));
    for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
        for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
            const blockColumnIndex = Math.floor(columnIndex / 3);
            const blockRowIndex = Math.floor(rowIndex / 3);
            if (board[columnIndex][rowIndex] === '.') {
                continue;
            }
            // Check column
            if (columnMaps[columnIndex].has(board[columnIndex][rowIndex])) {
                return false;
            }
            else {
                columnMaps[columnIndex].set(board[columnIndex][rowIndex], 1);
            }
            // Check row
            if (rowMaps[rowIndex].has(board[columnIndex][rowIndex])) {
                return false;
            }
            else {
                rowMaps[rowIndex].set(board[columnIndex][rowIndex], 1);
            }
            // Check block
            if (blockMaps[blockColumnIndex][blockRowIndex].has(board[columnIndex][rowIndex])) {
                return false;
            }
            else {
                blockMaps[blockColumnIndex][blockRowIndex].set(board[columnIndex][rowIndex], 1);
            }
        }
    }
    return true;
}
console.log(isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]));
//# sourceMappingURL=validSoduku.js.map