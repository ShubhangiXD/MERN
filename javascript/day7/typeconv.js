//type conversion
const str = "2983"
console.log(typeof str, typeof parseInt(str), typeof +str, typeof Number(str));

const num = 2398
console.log(typeof num, typeof num.toString(), typeof String(num));

let bool = false
console.log(typeof bool, typeof String(bool));

//more examples
console.log(5 + null)
console.log("5" + null)
console.log("5" + 2)
console.log("10" - 2)