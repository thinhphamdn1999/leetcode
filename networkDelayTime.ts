function networkDelayTime(times: number[][], n: number, k: number): number {
	const graph = setUpGraphForNetwork(times, n);
	const distance = dijkstraToFindAllShortestTimeForAllNode(graph, k);

	let maxTime = 0;
	const distanceKeys = Object.keys(distance);
	for (let key of distanceKeys) {
		if (maxTime < distance[key]) {
			maxTime = distance[key];
		}
	}

	return maxTime === Infinity ? -1 : maxTime;
}

function setUpGraphForNetwork(times: number[][], n: number) {
	const graph = {};

	for (let node = 1; node <= n; node++) {
		graph[node] = {};
	}

	for (let i = 0; i < times.length; i++) {
		graph[times[i][0]] = {
			...graph[times[i][0]],
			[times[i][1]]: times[i][2],
		};
	}

	return graph;
}

function dijkstraToFindAllShortestTimeForAllNode(graph: any, start: number) {
	const visited = new Set();
	const distance = {};
	const nodes = Object.keys(graph);

	for (let node of nodes) {
		distance[node] = Infinity;
	}

	distance[start] = 0;

	while (nodes.length > 0) {
		nodes.sort((a, b) => distance[a] - distance[b]);

		const closestNode = nodes.shift();

		if (distance[closestNode] === Infinity) break;

		visited.add(closestNode);

		for (let neighbor in graph[closestNode]) {
			if (!visited[neighbor]) {
				const newDistance =
					distance[closestNode] + graph[closestNode][neighbor];

				if (newDistance < distance[neighbor]) {
					distance[neighbor] = newDistance;
				}
			}
		}
	}

	return distance;
}
