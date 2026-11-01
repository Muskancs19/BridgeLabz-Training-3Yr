function greetUser(name, callback) {
    console.log("Hello" + name);
    callback();
}
function showEndMessage() {
    console.log("Welcome to my World!");
}
greetUser("Muskan", showEndMessage);