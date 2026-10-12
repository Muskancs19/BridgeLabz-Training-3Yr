const expenses = [3000, 1500, 6000, 2000, 1000];
let total = 0;

for (let expense of expenses) {
    total += expense;
}
const average = total / expenses.length;
const tax = total * 0.10;
total += tax;
console.log("Total Expenses Before Tax: ₹" + (total - tax).toFixed(2));
console.log("Average Monthly Expense: ₹" + average.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount After Tax: ₹" + total.toFixed(2));
