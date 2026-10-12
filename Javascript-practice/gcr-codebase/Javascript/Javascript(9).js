const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];

let answer;
switch (operator) {
    case "+":
        answer = num1 + num2;
        break;
    case "-":
        answer = num1 - num2;
        break;
    case "*":
        answer = num1 * num2;
        break;
    case "/":
        answer = num1 / num2;
        break;
}
if (operator === "/") {
    answer = answer.toFixed(2);
}
console.log(`Question: ${num1} ${operator} ${num2}`);
console.log("Correct Answer:", answer);
