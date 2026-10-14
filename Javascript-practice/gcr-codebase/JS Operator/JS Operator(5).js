let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;
function checkSecurity() {
    let isSecure =
        isAlarmOn &&
        isDoorLocked &&
        isWindowClosed &&
        isOwnerInside;
    if (isSecure) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
    console.log(
        "Security Alert:",
        !isAlarmOn || !isDoorLocked || !isWindowClosed
    );
}
console.log("Test 1:");
checkSecurity();

console.log("Test 2:");
isAlarmOn = false;
checkSecurity();

console.log("Test 3:");
isAlarmOn = true;
isWindowClosed = false;
checkSecurity();

console.log("Test 4:");
isWindowClosed = true;
checkSecurity();

