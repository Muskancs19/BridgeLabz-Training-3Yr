let scores = [];
for (let i = 0; i < 8; i++) {
    let randomScore = Math.floor(Math.random() * 71) + 30;
    scores.push(randomScore);
}
let analyzedScores = scores.map(function(score) {
    return score;
});
let highestScore = Math.max(...analyzedScores);
let lowestScore = Math.min(...analyzedScores);
let totalScore = analyzedScores.reduce(function(total, score) {
    return total + score;
}, 0);
let averageScore = totalScore / analyzedScores.length;
let passedStudents = analyzedScores.filter(function(score) {
    return score >= 50;
});

let passCount = passedStudents.length;
console.log("===== Student Performance Report =====");
console.log("Scores:", analyzedScores);
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Students Passed:", passCount);
console.log("Students Failed:", analyzedScores.length - passCount);
console.log("======================================");

