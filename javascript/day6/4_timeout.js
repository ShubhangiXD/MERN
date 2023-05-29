let timeout1 = prompt("Enter a time interval: ");
timeout1 = timeout1 * 1000;
setTimeout(() => {
    console.log("hello");
}, timeout1);