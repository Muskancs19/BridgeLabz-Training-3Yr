let feedback ="Great product! Fast delivery and amazing sound quality!";
let lowerCaseFeedback = feedback.toLowerCase();
let words = feedback.trim().split(/\s+/);
let wordCount = words.length;
let containsBad = lowerCaseFeedback.includes("bad");
let containsPoor = lowerCaseFeedback.includes("poor");

console.log("===== Customer Feedback Report =====");
console.log("Feedback:", feedback);
console.log("Word Count:", wordCount);

if (!containsBad && !containsPoor) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
console.log("====================================");

