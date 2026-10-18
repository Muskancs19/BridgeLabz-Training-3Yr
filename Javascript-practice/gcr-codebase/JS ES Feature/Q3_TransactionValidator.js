const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];
class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeAmountError";
    }
}

class MissingFieldError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingFieldError";
    }
}

class NullTransactionError extends Error {
    constructor(message) {
        super(message);
        this.name = "NullTransactionError";
    }
}

const valid = [];
const invalid = [];

console.log("========== TRANSACTION VALIDATOR ==========");

for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];

    try {
        if (transaction === null || transaction === undefined) {
            throw new NullTransactionError(
                "Transaction is null or undefined"
            );
        }
        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new MissingFieldError(
                "Transaction ID or amount is missing"
            );
        }
        if (
            typeof transaction.amount !== "number" ||
            !Number.isFinite(transaction.amount)
        ) {
            throw new TypeError(
                "Amount must be a finite number"
            );
        }

        if (transaction.amount < 0) {
            throw new NegativeAmountError(
                "Negative transaction amount"
            );
        }

        valid.push(transaction);

        console.log(
            `Transaction ${transaction.id}: VALID`
        );

    } catch (error) {
        invalid.push({
            index: i,
            type: error.name,
            message: error.message
        });

        console.log(
            `Transaction at index ${i}: ${error.name} - ${error.message}`
        );
    }
}

console.log("\n========== FINAL REPORT ==========");
console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Transactions:", valid.length);
console.log("Failed Transactions:", invalid.length);
console.log("Total Transactions:", transactions.length);