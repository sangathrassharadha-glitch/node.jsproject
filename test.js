const { add, subtract } = require('./app');

console.log("Addition:", add(10, 20));
console.log("Subtraction:", subtract(20, 10));

if (add(10, 20) !== 30) {
    throw new Error("Addition test failed");
}

if (subtract(20, 10) !== 10) {
    throw new Error("Subtraction test failed");
}

console.log("All tests passed");