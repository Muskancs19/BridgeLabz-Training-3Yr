const marks = [90, 88, 85, 92, 80];
const total = marks.reduce((sum, mark) => sum + mark, 0);
const average = total / marks.length;
const percentage = (total / (marks.length * 100)) * 100;
if (marks.some(mark => mark < 35)) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} else {
    console.log("Detained");
}
console.log("Total Marks:", total);
console.log("Average:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
