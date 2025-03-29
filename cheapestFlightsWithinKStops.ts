/*

There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

Example 1:
Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
Output: 700
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.

Example 2:
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
Output: 200
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.

Example 3:
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
Output: 500
Explanation:
The graph is shown above.
The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.

*/

function findCheapestPrice(
	n: number,
	flights: number[][],
	src: number,
	dst: number,
	k: number
): number {
	const graph = setUpGraphForFlights(flights, n);
	let cheapestPrice = dijkstraWithKMove(graph, src, k)[dst];
	return cheapestPrice === Infinity ? -1 : cheapestPrice;
}

function setUpGraphForFlights(flights: number[][], n: number) {
	const graph = {};

	for (let node = 0; node < n; node++) {
		graph[node] = {};
	}

	for (let i = 0; i < flights.length; i++) {
		graph[flights[i][0]] = {
			...graph[flights[i][0]],
			[flights[i][1]]: flights[i][2],
		};
	}

	return graph;
}

// DFS
// Time complexity: O(n^k)
// Space complexity: O(n)
// This solution is not efficient, reach time limit exceeded
function dfsForFindCheapestPrice(
	graph: any,
	visited: Set<number>,
	src: number,
	dst: number,
	k: number,
	price: number,
	cheapestPrice: number
) {
	if (src === dst) {
		cheapestPrice = Math.min(cheapestPrice, price);
		return cheapestPrice;
	}

	if (k === 0) return cheapestPrice;

	visited.add(src);

	for (let neighbor in graph[src]) {
		if (!visited.has(Number(neighbor))) {
			cheapestPrice = dfsForFindCheapestPrice(
				graph,
				visited,
				Number(neighbor),
				dst,
				k - 1,
				price + graph[src][neighbor],
				cheapestPrice
			);
		}
	}

	visited.delete(src);
	return cheapestPrice;
}

function dijkstraWithKMove(graph: any, start: number, k: number) {
	const distance = {};
	const nodes = Object.keys(graph);
	const queue = [[start, 0]];
	let stop = 0;

	for (let node of nodes) {
		distance[node] = Infinity;
	}

	distance[start] = 0;

	while (nodes.length > 0 && stop <= k) {
		const size = queue.length;

		for (let i = 0; i < size; i++) {
			const [currentNode, cost] = queue.shift();
			const currentNodeNum = Number(currentNode);
			for (let neighbor in graph[currentNodeNum]) {
				const newCost = cost + graph[currentNodeNum][neighbor];
				if (newCost < distance[neighbor]) {
					distance[neighbor] = newCost
					queue.push([neighbor, newCost]);
				}
			}
		}

		stop++;
	}

	return distance;
}

// Test cases
console.log(
	findCheapestPrice(
		4,
		[
			[0, 1, 100],
			[1, 2, 100],
			[2, 0, 100],
			[1, 3, 600],
			[2, 3, 200],
		],
		0,
		3,
		1
	)
); // Output: 700
console.log(
	findCheapestPrice(
		3,
		[
			[0, 1, 100],
			[1, 2, 100],
			[0, 2, 500],
		],
		0,
		2,
		1
	)
); // Output: 200
console.log(
	findCheapestPrice(
		3,
		[
			[0, 1, 100],
			[1, 2, 100],
			[0, 2, 500],
		],
		0,
		2,
		0
	)
); // Output: 500
console.log(
	findCheapestPrice(
		4,
		[
			[0, 1, 1],
			[0, 2, 5],
			[1, 2, 1],
			[2, 3, 1],
		],
		0,
		3,
		1
	)
); // Output: 6

console.log(
	findCheapestPrice(
		5,
		[
			[0, 1, 5],
			[1, 2, 5],
			[0, 3, 2],
			[3, 1, 2],
			[1, 4, 1],
			[4, 2, 1],
		],
		0,
		2,
		2
	)
); // Output: 7
