// Greed algorithm
function canJump(nums) {
    let steps = nums.length - 1;
    for (let index = nums.length - 2; index >= 0; index--) {
        if (nums[index] >= steps - index) {
            steps = index;
        }
    }
    return steps === 0;
}
// Normal dynamic programming
// Find minimum jump from start to end
function canJumpV2(nums) {
    const length = nums.length;
    const jumps = Array.from({ length }, (_, index) => 0);
    if (length === 0 || nums[0] === 0) {
        return false;
    }
    for (let index = 1; index < length; index++) {
        jumps[index] = Number.MAX_SAFE_INTEGER;
        for (let subIndex = 0; subIndex < index; subIndex++) {
            if (subIndex + nums[subIndex] >= index) {
                jumps[index] = Math.min(jumps[index], jumps[subIndex] + 1);
            }
        }
    }
    return jumps[length - 1] !== Number.MAX_SAFE_INTEGER;
}
// Final solution - Using greed BFS
// int jump(vector<int>& nums) {
// 	int n = size(nums), i = 0, maxReachable = 0, lastJumpedPos = 0, jumps = 0;
// 	while(lastJumpedPos < n - 1) {  // loop till last jump hasn't taken us till the end
// 		maxReachable = max(maxReachable, i + nums[i]);  // furthest index reachable on the next level from current level
// 		if(i == lastJumpedPos) {			  // current level has been iterated & maxReachable position on next level has been finalised
// 			lastJumpedPos = maxReachable;     // so just move to that maxReachable position
// 			jumps++;                          // and increment the level
// 	// NOTE: jump^ only gets updated after we iterate all possible jumps from previous level
// 	//       This ensures jumps will only store minimum jump required to reach lastJumpedPos
// 		}            
// 		i++;
// 	}
// 	return jumps;
// }
console.log(canJumpV2([2, 3, 1, 1, 4]));
//# sourceMappingURL=jumpGame.js.map