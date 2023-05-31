const arr = [1, 3, 5, 3, 7, 4, 6, 8, 9, 3, 8, 6, 7]
removedupes = () => {
    let newarr = [];
    for (const ele of arr) {
        if (!newarr.includes(ele)) {
            newarr.push(ele);
        }
    }
    console.log(newarr);
}
removedupes(arr);