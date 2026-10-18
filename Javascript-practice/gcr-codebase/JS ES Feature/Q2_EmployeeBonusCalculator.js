const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("========== EMPLOYEE BONUS REPORT ==========");

for (const employee of employees) {
    try {
        if (
            !employee ||
            employee.name === undefined ||
            employee.salary === undefined ||
            employee.years === undefined
        ) {
            throw new Error("Missing employee information");
        }
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0
        ) {
            throw new TypeError("Invalid salary or experience");
        }
        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        const totalSalary = salary + bonus;

        console.log(`\nEmployee Name: ${employee.name}`);
        console.log(`Salary: ₹${salary.toFixed(2)}`);
        console.log(`Experience: ${years} years`);
        console.log(`Bonus Rate: ${bonusRate * 100}%`);
        console.log(`Bonus Amount: ₹${bonus.toFixed(2)}`);
        console.log(`Total Salary: ₹${totalSalary.toFixed(2)}`);

    } catch (error) {
        console.log(
            `Error: ${error.name} - ${error.message}`
        );
    }
}
