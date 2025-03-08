/*

You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

Return the answers to all queries. If a single answer cannot be determined, return -1.0.

Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.


Example 1:
Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation: 
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? 
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
note: x is undefined => -1.0

Example 2:
Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
Output: [3.75000,0.40000,5.00000,0.20000]

Example 3:
Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
Output: [0.50000,2.00000,-1.00000,-1.00000]

*/

/*

Hint: This problem is a graph problem. You can represent the equations as a graph where the nodes are the variables and the edges are the values. You can then use DFS to find the answer for each query.

*/

function makeGraph(equations: string[][], values: number[]): Map<string, Map<string, number>> {
  let graph = new Map<string, Map<string, number>>();
  for (let i = 0; i < equations.length; i++) {
    let [a, b] = equations[i];
    let value = values[i];
    if (!graph.has(a)) {
      graph.set(a, new Map<string, number>());
    }
    if (!graph.has(b)) {
      graph.set(b, new Map<string, number>());
    }
    graph.get(a).set(b, value);
    graph.get(b).set(a, 1 / value);
  }
  return graph; 
}

function travelFromStartNumberDfs(graph: Map<string, Map<string, number>>, start: string, end: string, visited: Set<string>): number {
  if (start === end) {
    return 1;
  }
  visited.add(start);
  let neighbors = graph.get(start);
  for (let [neighbor, value] of neighbors) {
    if (!visited.has(neighbor)) {
      let result = travelFromStartNumberDfs(graph, neighbor, end, visited);
      if (result !== -1) {
        return value * result;
      }
    }
  }
  return -1;
}

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  let graph = makeGraph(equations, values);
  let results = [];
  for (let query of queries) {
    let [start, end] = query;
    if (!graph.has(start) || !graph.has(end)) {
      results.push(-1);
    } else {
      let visited = new Set<string>();
      let result = travelFromStartNumberDfs(graph, start, end, visited);
      results.push(result);
    }
  }
  return results;
};