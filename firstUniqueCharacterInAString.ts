/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
*/

// Time complexity: O(n)
// Space complexity: O(n) where n is the length of the string
function firstUniqChar(s: string): number {
  const charMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++){
    if (charMap.has(s[i])) {
      charMap.set(s[i], charMap.get(s[i]) + 1);
    } else {
      charMap.set(s[i], 1);
    }
  }

  for (let i = 0; i < s.length; i++){
    if (charMap.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};

// Tests
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
