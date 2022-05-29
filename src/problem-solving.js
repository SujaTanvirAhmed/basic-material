let arr = [1, 2, 4, 5, 7, 11, 9, 65];
let start = 0;
let end = arr.length - 1;

console.log(arr);

function swap(a, i, j) {
    let x = a[i];
    a[i] = a[j];
    a[j] = x;
    return a;
}

while (start !== end) {
    arr = swap(arr, start, end);
    start++;
    end--;
    if (start > end) break;
}

console.log(arr);