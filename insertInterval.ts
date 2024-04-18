import { mergeIntervals } from './mergeIntervals';

function insert(intervals: number[][], newInterval: number[]): number[][] {
	const newIntervals = [...intervals];
	newIntervals.push(newInterval);
	newIntervals.sort((a, b) => a[0] - b[0]);

	return mergeIntervals(newIntervals);
}

console.log(
	insert(
		[
			[1, 2],
			[3, 5],
			[6, 7],
			[8, 10],
			[12, 16]
		],
		[4, 8]
	)
);

function insertV2(intervals: number[][], newInterval: number[]): number[][] {
	let result = [];
	let i = 0;
	let n = intervals.length;
	while (i < n && intervals[i][1] < newInterval[0]) {
		result.push(intervals[i]);
		i++;
	}
	while (i < n && intervals[i][0] <= newInterval[1]) {
		newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
		newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
		i++;
	}
	result.push(newInterval);
	while (i < n) {
		result.push(intervals[i]);
		i++;
	}
	return result;
}
