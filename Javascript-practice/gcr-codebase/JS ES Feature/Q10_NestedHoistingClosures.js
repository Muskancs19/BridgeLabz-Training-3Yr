function outer() {
    console.log("Outer count before assignment:", count);
    var count = 5;
    function inner() {
        console.log("Inner count before assignment:", count);
        var count = 10;
        console.log("Inner count after assignment:", count);
    }

    inner();
    console.log("Outer count after inner:", count);
}
outer();
function outerArrow() {
    console.log("Arrow example - outer count:", count);
    var count = 5;
    const inner = () => {
        console.log("Arrow example - inner before assignment:", count);
        var count = 10;
        console.log("Arrow example - inner after assignment:", count);
    };
    inner();
    console.log("Arrow example - outer after inner:", count);
}
outerArrow();