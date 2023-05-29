const arr = ["hello", "twinkle", "stars", "laptop"]
const arr5more = []
const arr5less = []
arr.forEach(element => {
    if (element.length > 5)
        arr5more.push(element)
    else
        arr5less.push(element)
});
console.log(arr5more);
console.log(arr5less);