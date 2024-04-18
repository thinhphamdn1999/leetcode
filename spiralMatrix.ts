function visit(
	columnIndex: number,
	rowIndex: number,
	columnLength: number,
	rowLength: number,
	check: number[][],
	orderedArr: number[],
	matrix: number[][]
) {
	if (
		rowIndex >= rowLength ||
		columnIndex >= columnLength ||
		rowIndex < 0 ||
		columnIndex < 0 ||
		check[columnIndex][rowIndex] === 1
	) {
		return;
	}

	check[columnIndex][rowIndex] = 1;
	orderedArr.push(matrix[columnIndex][rowIndex]);

	if (columnIndex === 0 || check[columnIndex - 1][rowIndex] === 1) {
		visit(columnIndex, rowIndex + 1, columnLength, rowLength, check, orderedArr, matrix);
	}

	if (rowIndex === rowLength - 1 || check[columnIndex][rowIndex + 1] === 1) {
		visit(columnIndex + 1, rowIndex, columnLength, rowLength, check, orderedArr, matrix);
	}

	if (columnIndex === columnLength - 1 || check[columnIndex + 1][rowIndex] === 1) {
		visit(columnIndex, rowIndex - 1, columnLength, rowLength, check, orderedArr, matrix);
	}

	if (rowIndex === 0 || check[columnIndex][rowIndex - 1] === 1) {
		visit(columnIndex - 1, rowIndex, columnLength, rowLength, check, orderedArr, matrix);
	}
}

function spiralOrder(matrix: number[][]): number[] {
	const result = [];
	const check = Array.from({ length: matrix.length }, () =>
		Array.from({ length: matrix[0].length }, () => 0)
	);

	visit(0, 0, matrix.length, matrix[0].length, check, result, matrix);

	return result;
}

console.log(
	spiralOrder([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
		[13, 14, 15, 16]
	])
);
