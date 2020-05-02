let binarySearch =  (elements, value, start, end) => {
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if (elements[mid] === x) return true;
    if (elements[mid] > x)
        return binarySearch(elements, value, start, mid - 1);
    else
        return binarySearch(elements, value, mid + 1, end);
}
let elements = [1, 3, 5, 7, 8, 9];
let value = 5;
if (binarySearch(elements, value, 0, elements.length - 1)) console.log('Element is found');
else console.log('Element not found')