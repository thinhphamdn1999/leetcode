"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeIntervals = void 0;
function mergeIntervals(intervals) {
    if (intervals.length === 1) {
        return intervals;
    }
    // Sort by ascending order of the begin of the range element.
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    let first = intervals[0][0];
    let last = intervals[0][1];
    for (let index = 1; index < intervals.length; index++) {
        if (intervals[index][0] > last) {
            result.push([first, last]);
            first = intervals[index][0];
            last = intervals[index][1];
            continue;
        }
        first = Math.min(first, intervals[index][0]);
        last = Math.max(last, intervals[index][1]);
    }
    result.push([first, last]);
    return result;
}
exports.mergeIntervals = mergeIntervals;
// console.log(
// 	mergeIntervals([
// 		[2, 4],
// 		[0, 0]
// 	])
// );
//# sourceMappingURL=mergeIntervals.js.map