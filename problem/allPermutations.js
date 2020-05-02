let findPermutations = (str) => {
    if (str.length < 2) return str;
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        let substr = str.slice(0, i) + str.slice(i + 1, str.length)
        for (let value of findPermutations(substr)) {
            arr.push(char + value)
        }
    }
    return arr
}
console.log(findPermutations("abcd"));