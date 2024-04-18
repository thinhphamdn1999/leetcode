function mySqrt(x) {
    if (x <= 1) {
        return x;
    }
    let left = 0;
    let right = x - 1;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (mid * mid === x)
            return mid;
        if (mid * mid > x) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    return right;
}
console.log(mySqrt(2));
//# sourceMappingURL=mySqrl.js.map