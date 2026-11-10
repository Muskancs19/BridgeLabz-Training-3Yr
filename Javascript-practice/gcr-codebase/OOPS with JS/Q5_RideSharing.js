class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}
class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }
    calculateFare() {
        if (this.distance === undefined ||
            this.distance === null ||
            this.distance < 0) {
            throw new Error("Invalid distance!");
        }
        let farePerKm = 10;
        return this.distance * farePerKm;
    }
}
let user = new User("Rahul", 4.5);
let driver = new Driver("Aman", 4.8, "Car");

console.log("User:", user.name);
console.log("Driver:", driver.name);
console.log("Vehicle:", driver.vehicle);
try {
    let trip1 = new Trip("Delhi", "Noida", 20);
    console.log("Total Fare: Rs.", trip1.calculateFare());
}
catch (error) {
    console.log("Error:", error.message);
}
try {
    let trip2 = new Trip("Delhi", "Agra", -10);
    console.log("Total Fare:", trip2.calculateFare());
}
catch (error) {
    console.log("Error:", error.message);
}