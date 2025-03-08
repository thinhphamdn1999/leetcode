/* 
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

  Example 1:
  Input: numCourses = 2, prerequisites = [[1,0]]
  Output: true
  Explanation: There are a total of 2 courses to take. 
  To take course 1 you should have finished course 0. So it is possible.

  Example 2:
  Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
  Output: false
  Explanation: There are a total of 2 courses to take. 
  To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
*/

// Time: O(N)
// Space: O(N)
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph = createGraph(numCourses, prerequisites);
  const visited = new Set<number>();
  const visiting = new Set<number>();

  // Visit all the courses
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;

  // Return false if there is a cycle
  function dfs(course: number): boolean {
    // If the course is already visited, return true
    if (visited.has(course)) {
      return true;
    }
    
    // If the course is currently being visited, return false
    // because there is a cycle
    // For example, if course 0 has a prerequisite of course 1
    // and course 1 has a prerequisite of course 0, there is a cycle
    // because course 0 is currently being visited and course 1 is
    // a prerequisite of course 0
    // If course 1 is currently being visited, course 0 is a prerequisite
    // of course 1
    // If course 0 is a prerequisite of course 1, course 1 is a prerequisite
    // of course 0
    // This is a cycle
    if (visiting.has(course)) {
      return false;
    }
    
    // If the course is not visited, visit the course
    visiting.add(course);

    // Visit all the prerequisites
    for (const pre of graph.get(course)) {
      // If there is a cycle, return false
      if (!dfs(pre)) {
        return false;
      }
    }

    // Remove the course from the visiting set and add it to the
    // visited set
    visiting.delete(course);
    visited.add(course);
    return true;
  }
};

function createGraph(numCourses: number, prerequisites: number[][]): Map<number, number[]> {
  const graph = new Map<number, number[]>();
  for (let i = 0; i < numCourses; i++) {
    graph.set(i, []);
  }

  for (const [course, pre] of prerequisites) {
    const list = graph.get(course);
    list.push(pre);
  }

  return graph;
}

console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false
console.log(canFinish(3, [[1, 0], [2, 1]])); // true
console.log(canFinish(3, [[1, 0], [2, 1], [0, 2]])); // false
console.log(canFinish(4, [[1, 0], [2, 1], [3, 2]])); // true
console.log(canFinish(4, [[1, 0], [2, 1], [3, 2], [0, 3]])); // false
console.log(canFinish(4, [[1, 0], [2, 1], [3, 2], [0, 3], [1, 3]])); // false
