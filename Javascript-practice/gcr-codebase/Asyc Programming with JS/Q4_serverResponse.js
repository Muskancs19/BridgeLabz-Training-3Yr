function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server A deployment completed");
            } else {
                reject("Server A failed");
            }
        }, 2000);
    });
}
function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server B deployment completed");
            } else {
                reject("Server B failed");
            }
        }, 3000);
    });
}
let deploymentA = serverA();
let deploymentB = serverB();
Promise.all([deploymentA, deploymentB])
    .then((results) => {
        console.log(results);
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.log("Deployment error:", error);

    });
Promise.race([deploymentA, deploymentB])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Fastest response failed:", error);
    });