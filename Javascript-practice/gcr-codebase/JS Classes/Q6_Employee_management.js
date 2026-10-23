class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; 
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }

    displayDetails() {
        console.log(
            `ID: ${this.id}, Name: ${this.name}, ` +
            `Department: ${this.department}, Monthly Salary: ₹${this.salary}, ` +
            `Annual Salary: ₹${this.getAnnualSalary()}`
        );
    }
}
const employees = [
    new Employee(1, "Amit", "IT", 40000),
    new Employee(2, "Priya", "HR", 35000),
    new Employee(3, "Rahul", "Finance", 45000),
    new Employee(4, "Neha", "Marketing", 30000),
    new Employee(5, "Karan", "IT", 50000)
];

console.log("Employee Details:");

employees.forEach(employee => {
    employee.displayDetails();
});

employees[0].applyBonus(10);

console.log("\nAfter Applying 10% Bonus to Amit:");

employees[0].displayDetails();
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(
    "\nTotal Annual Payout of Company: ₹" + totalAnnualPayout
);