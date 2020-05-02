const merge = (left, right) => {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            arr.push(left[0]);
            left = left.slice(1)
        } else {
            arr.push(right[0]);
            right = right.slice(1)
        }
    }
    while (left.length) arr.push(left.shift());
    while (right.length) arr.push(right.shift());
    return arr;
}
const mergesort = (arr) => {
    if (arr.length < 2) return arr;
    else {
        let mid = parseInt(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid, arr.length);
        return merge(mergesort(left), mergesort(right));
    }
}
let array = [100, 1, 3, 34, 124, 123, 90];
console.log(mergesort(array));