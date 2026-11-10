class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    work() {
        console.log(this.name + " is doing general employee work.");
    }
}
class Manager extends Employee {
    work() {
        console.log(this.name + " is managing the team.");
    }
}
let emp = new Employee("Rahul", "IT");
let mgr = new Manager("Priya", "HR");
emp.work();
mgr.work();