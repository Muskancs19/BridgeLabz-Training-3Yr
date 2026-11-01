function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}
Car.prototype.getDetails = function() {
    console.log("Brand: " + this.brand);
    console.log("Model: " + this.model);
};
let car1 = new Car("Toyota", "Fortuner");
let car2 = new Car("Hyundai", "Creta");
console.log("First Car:");
car1.getDetails();
console.log("Second Car:");
car2.getDetails();