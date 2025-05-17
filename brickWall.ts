/*
There is a rectangular brick wall in front of you with n rows of bricks. The ith row has some number of bricks each of the same height (i.e., one unit) but they can be of different widths. The total width of each row is the same.
Draw a vertical line from the top to the bottom and cross the least bricks. If your line goes through the edge of a brick, then the brick is not considered as crossed. You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.
Given the 2D array wall that contains the information about the wall, return the minimum number of crossed bricks after drawing such a vertical line.


Example 1:
Input: wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
Output: 2


Example 2:
Input: wall = [[1],[1],[1]]
Output: 3
*/

function leastBricks(wall: number[][]): number {
  // Create a map to store the count of edges at each position.
  // The key is the position of the edge, and the value is the count of edges at that position.
  const numberOfEdgeMap = new Map<number, number>();
  // Initialize the maximum number of edges crossed to 0.
  let maxEdge = 0;
  for (const row of wall) {
		// Initialize the position of the current row to 0.
		let position = 0;
		// Iterate through the row, excluding the last brick.
    for (let i = 0; i < row.length - 1; ++i) {
      // Update the position by adding the width of the current brick.
			position += row[i];
			// Update the count of edges at the current position in the map.
			numberOfEdgeMap.set(position, (numberOfEdgeMap.get(position) || 0) + 1);
			// Update the maximum number of edges crossed.
			maxEdge = Math.max(maxEdge, numberOfEdgeMap.get(position)!);
		}
	}

  // The minimum number of crossed bricks is the total number of rows minus the maximum number of edges crossed.
  return wall.length - maxEdge;
}
