const arr = [23, 45, 87, 34, 38, 56]
const newarr = []
arr.forEach(ele => {
    ele = ele + 5;
    if (ele > 40)
        newarr.push(ele)
})
console.log(arr)
console.log(newarr)