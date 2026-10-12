
const currentSalary = 30000;
const incrementRate = 10;
let salary = currentSalary;

const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;
    salary = Math.round(salary);
    salaryReport.push({
        Year: year,
        Salary: "₹" + salary.toLocaleString("en-IN")
    });
}
console.table(salaryReport);
