function applyOperation(numbers, operation) {
    let result = numbers.map(operation);
    return result;
}
let numbers = [1, 2, 3, 4, 5];
function double(num) {
    return num * 2;
}
function square(num) {
    return num * num;
}
let doubledNumbers = applyOperation(numbers, double);
console.log("Doubled Numbers:", doubledNumbers);
let squaredNumbers = applyOperation(numbers, square);
console.log("Squared Numbers:", squaredNumbers);