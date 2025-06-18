/**
We define a magic square to be an  matrix of distinct positive integers from  to  where the sum of any row, column, or diagonal of length  is always equal to the same number: the magic constant.

You will be given a  matrix  of integers in the inclusive range . We can convert any digit  to any other digit  in the range  at cost of . Given , convert it into a magic square at minimal cost. Print this cost on a new line.

Note: The resulting magic square must contain distinct integers in the inclusive range .

Example
Input: s = [[4,9,2],[3,5,7],[8,1,6]]
Output: 1
Example
Input: s = [[4,8,2],[3,5,7],[8,1,6]]
Output: 4

 */

function formingMagicSquare(s: number[][]): number {
	const magicSquares = [
		[8, 1, 6, 3, 5, 7, 4, 9, 2],
		[6, 1, 8, 7, 5, 3, 2, 9, 4],
		[4, 9, 2, 3, 5, 7, 8, 1, 6],
		[2, 9, 4, 7, 5, 3, 6, 1, 8],
		[8, 3, 4, 1, 5, 9, 6, 7, 2],
		[4, 3, 8, 9, 5, 1, 2, 7, 6],
		[6, 7, 2, 1, 5, 9, 8, 3, 4],
		[2, 7, 6, 9, 5, 1, 4, 3, 8]
		// Add all possible magic squares
  ];

  let minCost = Infinity;

  // Iterate through each magic square
  // and calculate the cost to convert the input square to that magic square
  // The magic squares are represented as flat arrays of size 9
  // Each magic square is a 3x3 matrix flattened into a single array
  // The cost is the sum of the absolute differences between corresponding elements
  // in the input square and the magic square
	for (const magicSquare of magicSquares) {
    let cost = 0;
    
    // Calculate the cost to convert the current square to the magic square
		for (let i = 0; i < 9; i++) {
			const row = Math.floor(i / 3);
			const col = i % 3;
			cost += Math.abs(s[row][col] - magicSquare[i]);
    }

    // Update the minimum cost
		minCost = Math.min(minCost, cost);
  }

	return minCost;
}
