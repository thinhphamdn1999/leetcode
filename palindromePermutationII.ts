/*

Palindrome Permutation II
Given a string s, return all the palindromic permutations (without duplicates) of it. Return an empty array if no palindromic permutation could be form.

Example 1:
Input: "aabb"
Output: ["abba", "baab"]

Example 2:
Input: "abc"
Output: []

Example 3:
Input: "aab"
Output: ["aba"]

*/


function palindromePermutationII(s: string): string[] {
  const res: string[] = [];
  const charCount = new Map<string, number>();
  let oddCount = 0;
  let midChar = '';

  // Count the characters
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  // Check if there is only one odd count
  for (const count of charCount.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  if (oddCount > 1) {
    return res;
  }

  // Get the mid character
  for (const [key, value] of charCount.entries()) {
    if (value % 2 !== 0) {
      midChar = key;
      charCount.set(key, value - 1);
      break;
    }
  }

  // Generate the permutations
  generatePermutations(midChar, charCount, res, s.length);

  return res;
}

function generatePermutations(midChar: string, charCount: Map<string, number>, res: string[], len: number): void {
  if (midChar.length === len) {
    res.push(midChar);
    return;
  }

  for (const [key, value] of charCount.entries()) {
    if (value > 0) {
      charCount.set(key, value - 2);
      generatePermutations(key + midChar + key, charCount, res, len);
      charCount.set(key, value);
    }
  }
}

console.log(palindromePermutationII('aabb')); // ["abba", "baab"]
console.log(palindromePermutationII('abc')); // []
console.log(palindromePermutationII('aab')); // ["aba"]
console.log(palindromePermutationII('aabbcc')); // ["abccba", "bacbca", "baccab", "acbbca", "acbabc", "accbba", "cabbac", "cababc", "cacbba", "cbabac", "cbacba", "ccabba"]
