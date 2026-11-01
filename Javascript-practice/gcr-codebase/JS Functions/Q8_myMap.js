Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            result[i] = callback(this[i], i, this);
        }
    }
    return result;
};
let numbers = [1, 2, 3];
let doubled = numbers.myMap(function(num) {
    return num * 2;
});
console.log("Original Array:", numbers);
console.log("Doubled Array:", doubled);