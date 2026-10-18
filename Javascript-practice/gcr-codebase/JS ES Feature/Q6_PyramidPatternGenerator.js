const input = Number(process.argv[2] ?? 5);
const rows =
    Number.isInteger(input) && input > 0
        ? input
        : 5;
console.log(`Pyramid Height: ${rows}`);

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";

        if (j < i) {
            pattern += " ";
        }
    }
    console.log(pattern);
}
