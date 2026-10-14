const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

console.log("===== Department Performance Report =====");

for (let i = 0; i < departments.length; i++) {
    let departmentName = departments[i][0];
    let performanceScore = departments[i][1];
    let performanceRating;

    if (performanceScore >= 90) {
        performanceRating = "Excellent";
    } else {
        if (performanceScore >= 75) {
            performanceRating = "Good";
        } else {
            if (performanceScore >= 60) {
                performanceRating = "Average";
            } else {
                performanceRating = "Needs Improvement";
            }
        }
    }

    console.log(
        "Department: " + departmentName +
        " | Score: " + performanceScore +
        " | Rating: " + performanceRating
    );
}

console.log("==========================================");

