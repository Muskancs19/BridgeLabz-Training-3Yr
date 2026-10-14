let bonus = 5000;
function calculateSalary(isPermanent) {
    let salary = 40000;
    if (isPermanent === true) {
        salary = salary + bonus;
    }
    console.log("Permanent Employee:", isPermanent);
    console.log("Total Salary: ₹" + salary);
}
calculateSalary(true);
calculateSalary(false);

function demonstrateScope() {
    let isPermanent = false;
    isPermanent = true;

    console.log("Local isPermanent:", isPermanent);
    console.log("Global bonus:", bonus);
}

demonstrateScope();
console.log("Bonus outside function:", bonus);