function dfs(
	column: number,
	row: number,
	columnLength: number,
	rowLength: number,
	grid: string[][]
) {
	if (grid[column][row] === '0') {
		return;
	}
	if (grid[column][row] === '1') {
		grid[column][row] = '0';
	}

	if (column - 1 >= 0) {
		dfs(column - 1, row, columnLength, rowLength, grid);
	}

	if (row - 1 >= 0) {
		dfs(column, row - 1, columnLength, rowLength, grid);
	}

	if (row + 1 !== rowLength) {
		dfs(column, row + 1, columnLength, rowLength, grid);
	}
  
	if (column + 1 !== columnLength) {
		dfs(column + 1, row, columnLength, rowLength, grid);
	}
}

function numIslands(grid: string[][]): number {
	let islands = 0;
	const columnLength = grid.length;
	const rowLength = grid[0].length;

	for (let column = 0; column < columnLength; column++) {
		for (let row = 0; row < rowLength; row++) {
			if (grid[column][row] === '1') {
				islands++;
				dfs(column, row, columnLength, rowLength, grid);
			}
		}
	}

	return islands;
}

console.log(
	numIslands([
		['1', '1', '1'],
		['0', '1', '0'],
		['1', '1', '1']
	])
);
