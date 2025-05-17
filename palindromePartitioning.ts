/** 
 * Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.


Example 1:
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]


Example 2:
Input: s = "a"
Output: [["a"]]


Example 3:
s = "aaab"
output = [["a","a","a","b"],["a","aa","b"],["aa","a","b"],["aaa","b"]]


*/

function partition(s: string): string[][] {
	const length = s.length;
	// 'isValidPalindrome' table to keep track of valid palindrome substrings.
	const isValidPalindrome: boolean[][] = new Array(length)
		.fill(0)
		.map(() => new Array(length).fill(true));

	// Fill the table with the correct values, bottom-up manner.
	for (let start = length - 1; start >= 0; --start) {
		for (let end = start + 1; end < length; ++end) {
			isValidPalindrome[start][end] =
				s[start] === s[end] && isValidPalindrome[start + 1][end - 1];
		}
	}

	// This will hold all possible palindrome partitions.
	const allPartitions: string[][] = [];
	// 'currentPartition' temporarily stores one possible partition.
	const currentPartition: string[] = [];

	// Helper function to perform depth-first search for partitions.
	const dfs = (index: number) => {
		// If the entire string has been processed, save the current partition.
		if (index === length) {
			allPartitions.push(currentPartition.slice());
			return;
		}
		// Explore further partitions.
		for (let end = index; end < length; ++end) {
			// Check if the substring is a valid palindrome
			if (isValidPalindrome[index][end]) {
				// Add the palindrome substring to the current partition.
				currentPartition.push(s.slice(index, end + 1));
				// Recursively check for further palindromes from the end of the current substring.
				dfs(end + 1);
				// Backtrack to explore other possible partitions by removing the last added palindrome.
				currentPartition.pop();
			}
		}
	};

	// Start the depth-first search from the beginning of the string.
	dfs(0);
	// Return all possible palindrome partitions found.
	return allPartitions;
}

