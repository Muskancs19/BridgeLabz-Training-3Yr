function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Boiling water...");

        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve("Water is boiled!");
            } else {
                reject("Failed to boil water.");
            }
        }, 1500);
    });
}
function brewCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Brewing coffee...");

        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve("Coffee is brewed!");
            } else {
                reject("Coffee brewing failed.");
            }
        }, 1500);
    });
}
function pourCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Pouring coffee into the cup...");

        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve("Coffee poured successfully!");
            } else {
                reject("Failed to pour coffee.");
            }
        }, 1500);
    });
}
boilWater()
    .then((message) => {
        console.log(message);
        return brewCoffee();
    })
    .then((message) => {
        console.log(message);
        return pourCoffee();
    })
    .then((message) => {
        console.log(message);
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Error:", error);
    });