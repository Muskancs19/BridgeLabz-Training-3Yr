const apiData = [
    "25", "true", "false", "NaN", " ",
    "100px", "3.14", null, undefined
];

const validNumbers = [];
const invalidNumbers = [];

console.log("========== DYNAMIC DATA PARSER ==========");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);
    const isWhitespace =
        typeof value === "string" && value.trim() === "";

    const isValid =
        Number.isFinite(numberValue) && !isWhitespace;

    console.log(`\nOriginal Value: ${String(value)}`);
    console.log(`Number: ${numberValue}`);
    console.log(`Boolean: ${booleanValue}`);
    console.log(`String: "${stringValue}"`);

    if (isValid) {
        validNumbers.push(numberValue);
        console.log("Status: VALID");
    } else {
        invalidNumbers.push(value);
        console.log("Status: INVALID");
    }
}
console.log("\n========== FINAL REPORT ==========");
console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Numeric Data:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);
