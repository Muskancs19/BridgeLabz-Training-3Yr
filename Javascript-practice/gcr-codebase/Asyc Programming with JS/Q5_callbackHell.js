function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}
function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}
function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}
function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}
function celebrate() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}
console.log("Starting build pipeline...");
design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate();
            });
        });
    });
});