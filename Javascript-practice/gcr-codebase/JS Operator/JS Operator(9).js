let numbers = [];
let results = [];
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let result;
    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }
    results.push({
        number: number,
        classification: result
    });
}
console.log("===== Odd-Even Number Analysis =====");

for (let i = 0; i < results.length; i++) {
    console.log(
        results[i].number + " -> " +
        results[i].classification
    );
}
console.log("====================================");
