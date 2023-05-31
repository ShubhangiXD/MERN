const arr = [1, 2, 3, 4, 5, 6];
console.time("for each: ");
arr.forEach(Ele => console.log(Ele));
console.timeEnd("for each: ");

console.time("for loop: ");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.timeEnd("for loop: ");

console.time("for in: ");
for (const ele of arr) {
    console.log(ele);
}
console.timeEnd("for in: ")