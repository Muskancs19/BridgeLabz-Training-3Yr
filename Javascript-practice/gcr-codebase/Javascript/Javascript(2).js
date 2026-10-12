const userName = "Muskan";
const age = 20;
const isStudent = true;
const subjects = ["JavaScript", "Python", "Cybersecurity"];
const user = { city: "Mathura", course: "BTech CSE" };
const emptyValue = null;
let unknownValue;
const report = [
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Empty Value", Value: String(emptyValue), Type: String(emptyValue) },
    { Label: "Unknown Value", Value: String(unknownValue), Type: typeof unknownValue }
];
console.table(report);
