function solution(A, X) {
    var N = A.length;
    if (N === 0) {
        return -1;
    }
    var l = 0;
    var r = N-1;
    while (l < r) {
        var m = Math.floor((l + r) / 2);
        if (A[m] > X) {
            r = m - 1;
        } else {
            l = m;
        }
    }
    if (A[l] == X) {
        return l;
    }
    return -1;
}