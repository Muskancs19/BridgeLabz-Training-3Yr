const operations = [
    "add",
    "divide",
    "power",
    "root",
    "subtract"
];

const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Invalid operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}
function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new CalculationError(
                    "Division by zero is not allowed"
                );
            }

            return a / b;

        case "power":
            return a ** b;

        case "root":
            if (a < 0) {
                throw new CalculationError(
                    "Square root of a negative number is not allowed"
                );
            }

            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new InvalidOperationError(operation);
    }
}

console.log("========== SMART CALCULATOR ==========");
for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);

        console.log(
            `${operation.toUpperCase()}: ${num1}, ${num2} = ${result}`
        );

    } catch (error) {
        console.log(
            `${operation.toUpperCase()}: ${error.name} - ${error.message}`
        );
    }
}

try {
    calculate("multiply", num1, num2);
} catch (error) {
    console.log(
        `UNKNOWN OPERATION: ${error.name} - ${error.message}`
    );
}