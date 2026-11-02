function getBugs() {
    return new Promise((resolve, reject) => {
        console.log("Fetching bugs...");
        setTimeout(() => {
            let apiSuccess = Math.random() > 0.3;
            if (apiSuccess) {
                let bugs = [
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ];
                resolve(bugs);
            } else {
                reject("API failed to fetch bugs.");
            }
        }, 1000);
    });
}
getBugs()
    .then((bugs) => {
        console.log("Bugs fetched successfully:");
        console.table(bugs.map((bug, index) => ({
            "Bug Number": index + 1,
            "Bug Description": bug
        })));
    })
    .catch((error) => {
        console.log("Error:", error);
    });