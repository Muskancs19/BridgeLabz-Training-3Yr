function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Profile Loaded");
            } else {
                reject("Profile Failed");
            }
        }, 2000);
    });
}
function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Posts Loaded");
            } else {
                reject("Posts Failed");
            }
        }, 1500);
    });
}
function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Messages Loaded");
            } else {
                reject("Messages Failed");
            }
        }, 1000);
    });
}
let startTime = Date.now();
Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
])
.then((results) => {
    console.log("Dashboard Loading Results:");
    results.forEach((result, index) => {
        let moduleNames = ["Profile", "Posts", "Messages"];
        if (result.status === "fulfilled") {
            console.log(moduleNames[index] + ": Success - " + result.value);
        } else {
            console.log(moduleNames[index] + ": Failed - " + result.reason);
        }
    });
    let endTime = Date.now();
    console.log("Total Time Taken:", endTime - startTime, "ms");
});