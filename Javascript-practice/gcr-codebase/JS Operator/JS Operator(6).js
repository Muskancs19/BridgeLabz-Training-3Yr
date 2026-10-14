let count = 0;
function increment() {
    count++;
    console.log("Counter after increment:", count);
}
function decrement() {
    count--;
    console.log("Counter after decrement:", count);
}
function demonstrateNestedFunction() {
    function showCount() {
        console.log("Count inside nested function:", count);
    }
    showCount();
}
console.log("Initial Count:", count);

increment();
increment();
increment();
decrement();

demonstrateNestedFunction();

console.log("Final Count:", count);

