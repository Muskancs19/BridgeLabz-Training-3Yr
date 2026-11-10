class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }
    getGrade() {
        let avg = this.calculateAverage();
        if (avg >= 80)
            return "A";
        else if (avg >= 60)
            return "B";
        else if (avg >= 40)
            return "C";
        else
            return "F";
    }
}
let s1 = new Student("Rahul", [80, 90, 85]);
let s2 = new Student("Priya", [60, 70, 65]);
let s3 = new Student("Aman", [30, 35, 40]);

console.log("Student:", s1.name, "Average:", s1.calculateAverage(), "Grade:", s1.getGrade());
console.log("Student:", s2.name, "Average:", s2.calculateAverage(), "Grade:", s2.getGrade());
console.log("Student:", s3.name, "Average:", s3.calculateAverage(), "Grade:", s3.getGrade());