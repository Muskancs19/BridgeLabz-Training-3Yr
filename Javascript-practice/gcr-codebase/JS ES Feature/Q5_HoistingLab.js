console.log("Score before assignment:", score);
announce();
var score = 50;
function announce() {
    console.log("Game started");
}
console.log("Score after assignment:", score);
let status = "ready";
function startGame() {
    console.log("Game status:", status);
}
startGame();
const announceArrow = () => {
    console.log("Game started using arrow function");
};
announceArrow();
