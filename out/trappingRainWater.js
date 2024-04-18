function trap(height) {
    const length = height.length;
    const maxHeightRight = Array.from({ length }, (_, k) => 0);
    const maxHeightLeft = Array.from({ length }, (_, k) => 0);
    let trapTraffic = 0;
    maxHeightRight[length - 1] = height[length - 1];
    for (let index = length - 2; index >= 0; index--) {
        maxHeightRight[index] = Math.max(height[index], maxHeightRight[index + 1]);
    }
    maxHeightLeft[0] = height[0];
    for (let index = 1; index < length; index++) {
        maxHeightLeft[index] = Math.max(height[index], maxHeightLeft[index - 1]);
    }
    for (let index = 0; index < height.length; index++) {
        trapTraffic += Math.min(maxHeightLeft[index], maxHeightRight[index]) - height[index];
    }
    return trapTraffic;
}
function trapV2(height) {
    let left = 0;
    let right = height.length - 1;
    let maxLeftHeight = height[0];
    let maxRightHeight = height[height.length - 1];
    let trapTraffic = 0;
    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] <= maxLeftHeight) {
                trapTraffic += maxLeftHeight - height[left];
            }
            else {
                maxLeftHeight = height[left];
            }
            left++;
        }
        else {
            if (height[right] <= maxRightHeight) {
                trapTraffic += maxRightHeight - height[right];
            }
            else {
                maxRightHeight = height[right];
            }
            right--;
        }
    }
    return trapTraffic;
}
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
//# sourceMappingURL=trappingRainWater.js.map