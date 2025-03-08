/*
The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

Example 1:
Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]

Example 2:
Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
*/

// Using Set
function findRepeatedDnaSequencesUsingMap(s: string): string[] {
  const set = new Set<string>();
  const result = new Set<string>();
  for (let i = 0; i < s.length - 9; i++) {
    const sub = s.slice(i, i + 10);
    if (set.has(sub)) {
      result.add(sub);
    } else {
      set.add(sub);
    }
  }

  return Array.from(result);
};

// Time: O(N)
// Space: O(N)
console.log(findRepeatedDnaSequencesUsingMap("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")); // ["AAAAACCCCC","CCCCCAAAAA"]
console.log(findRepeatedDnaSequencesUsingMap("AAAAAAAAAAAAA")); // ["AAAAAAAAAA"]
