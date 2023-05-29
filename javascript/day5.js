//write a program to input a string and reverse it. convert the letters to uppercase and store in an array
//input: "hello"
//output: ["O","L","L","E","H"]
const rev = (str) => {
    var str = "hello";
    var arr = [];
    var rev = "";
    for (var i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    console.log(rev);
    for (var i = 0; i < rev.length; i++) {
        arr.push(rev[i].toUpperCase());
    }
    console.log(arr);
}
