let x = 16.75;
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let cube = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;
let summary = `
===== Math Utility Dashboard =====
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot.toFixed(2)}
Cube (x^3): ${cube.toFixed(2)}
Random Number (10-50): ${randomNumber}
=================================
`;
console.log(summary);