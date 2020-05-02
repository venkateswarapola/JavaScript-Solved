//Taking Hexa decimal input in form of string comma seperated
const hexIt = (arr) => {
    var ans = "";
    arr.split(",").forEach((value) => {
        ans += hexaToBinary(value)
    })
    return ans;
}
const hexaToBinary = (value) => {
    return (parseInt(value, 16).toString(2));
}
arr = "20,30,42,F8,EA"
console.log(hexIt(arr));
