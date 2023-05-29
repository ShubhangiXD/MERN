console.log("using for each: ")
const arr = [1, 2, 3, 4, 5];
arr.forEach((ele, index, array) => {
    console.log({ ele }, { index }, { array })
})

console.log("Using for loop: ")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], i, arr)
}

console.log("Mapping: ")
const res_array = arr.map((ele, i, arr) => ele * 2);
console.log(res_array);

const doublearr = (ele, i, arr) => {
    return ele * 2;
}
console.log(arr.map(doublearr))

console.log("Filtering: ")
const filter_arr = arr.filter((ele, i, arr) => ele % 2 == 0);
console.log(filter_arr);
