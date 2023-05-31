
/* for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
}
console.log(result); */
let result = "";
const str = "hello"
reverse1 = (str) => {
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    console.log(result);
};
reverse1(str);