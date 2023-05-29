const arr = [1, 2, 3, 4, "me"];
console.log(arr);

//length
console.log(arr.length);

//toString()
console.log(arr.toString());

//join
console.log(arr.join(" * "));

//pop
console.log(arr.pop());
console.log(arr);

//push
console.log(arr.push("you"));
console.log(arr);

//shift
console.log(arr.shift());
console.log(arr);

//unshift
console.log("unshift")
console.log(arr.unshift("me"));
console.log(arr);

//splice
console.log("splice")
console.log(arr.splice(2, 0, "you"));
console.log(arr);

//concat
console.log("concat")
const arr2 = [5, 6, 7, 8];
console.log(arr.concat(arr2));
console.log(arr);

//slice
console.log("slice:")
console.log(arr.slice(2, 4));
console.log(arr);

//sort
const sarr = [1, 2, 4, 45, 67]
console.log("sort")
const sortArr = sarr.sort((a, b) => a - b);
console.log(sortArr);