const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

console.log("========== JSON AUDIT ==========");

for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;

    try {
        const parsed = JSON.parse(rawData[i]);
        if (
            parsed.user === undefined ||
            parsed.age === undefined
        ) {
            throw new Error("Missing required key: user or age");
        }
        const age = Number(parsed.age);

        if (!Number.isFinite(age)) {
            throw new TypeError("Invalid age value");
        }

        const user = {
            ...parsed,
            age: age
        };

        clean.push(user);

        if (age < 18) {
            under18.push(user);
        }

        console.log(`Line ${lineNumber}: VALID`);
        console.log(user);

    } catch (error) {
        errors.push({
            line: lineNumber,
            message: error.message
        });

        console.log(
            `Line ${lineNumber}: ERROR - ${error.message}`
        );
    }
}

console.log("\n========== FINAL REPORT ==========");
console.log("Clean Data:", clean);
console.log("Errors:", errors);
console.log("Users Under 18:", under18);
console.log("Valid Entries:", clean.length);
console.log("Invalid Entries:", errors.length);