/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
	const rowLength = board.length;
	const columnLength = board[0].length;
	const visitedEdgeIslands: number[][] = Array.from(Array(rowLength), () =>
		Array(columnLength).fill(false)
	);
	const edgeIslands: number[][] = [];

	for (let row = 0; row < rowLength; row++) {
		for (let column = 0; column < columnLength; column++) {
			const isLeftEdge = column === 0;
			const isRightEdge = column === columnLength - 1;
			const isTopEdge = row === 0;
			const isBottomEdge = row == rowLength - 1;

			if (
				!visitedEdgeIslands[row][column] &&
				(isLeftEdge || isRightEdge || isTopEdge || isBottomEdge) &&
				board[row][column] === 'O'
			) {
				dfsIsland(visitedEdgeIslands, row, column, edgeIslands, board);
			}
		}
	}

	for (let row = 0; row < rowLength; row++) {
		for (let column = 0; column < columnLength; column++) {
			if (board[row][column] === 'O') {
				board[row][column] = 'X';
			}
		}
	}

	for (let edgeIslandIndex = 0; edgeIslandIndex < edgeIslands.length; edgeIslandIndex++) {
		const row = edgeIslands[edgeIslandIndex][0];
		const column = edgeIslands[edgeIslandIndex][1];
		board[row][column] = 'O';
	}
}

function dfsIsland(visited, row, column, edgeIslands, board) {
	visited[row][column] = true;
	edgeIslands.push([row, column]);

	if (board[row][column + 1] === 'O' && !visited[row][column + 1])
		dfsIsland(visited, row, column + 1, edgeIslands, board);
	if (board[row][column - 1] === 'O' && !visited[row][column - 1])
		dfsIsland(visited, row, column - 1, edgeIslands, board);
	if (!!board[row + 1] && board[row + 1][column] === 'O' && !visited[row + 1][column])
		dfsIsland(visited, row + 1, column, edgeIslands, board);
	if (!!board[row - 1] && board[row - 1][column] === 'O' && !visited[row - 1][column])
		dfsIsland(visited, row - 1, column, edgeIslands, board);
}

solve([['X']]);
