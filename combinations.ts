/*
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

 

Example 1:
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

Example 2:
Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.

*/

function combineHelper(n: number, k: number, start: number, current: number[], result: number[][]): void {
  if (current.length === k) {
    result.push([...current]);
  }

  for (let i = start; i <= n; i++) {
    current.push(i);
    combineHelper(n, k, i + 1, current, result);
    current.pop();
  }
}

function combine(n: number, k: number): number[][] {
  const result: number[][] = [];
  const current: number[] = [];
  combineHelper(n, k, 1, current, result);
  return result;
};


// Test cases
console.log(combine(4, 2)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log(combine(1, 1)); // [[1]]
console.log(combine(4, 3)); // [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]