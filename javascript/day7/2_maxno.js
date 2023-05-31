const arr = [12, 34, 58, 43, 23]
let max = 0;
maxno = (arr) => {
    for (const ele of arr) {
        if (ele > max) {
            max = ele;
        }
    }
    console.log(max);
};
maxno(arr)
