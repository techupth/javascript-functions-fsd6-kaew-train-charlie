// Start coding here
let calculator = {};

calculator.add = (a, b) => a + b;
calculator.substract = (a, b) => a - b;
calculator.multiply = (a, b) => a * b;
calculator.divide = (a, b) => a / b;

let addResult = calculator.add(10, 20);
console.log(addResult);

let divideResult = calculator.divide(3000, 10);
console.log(divideResult);
