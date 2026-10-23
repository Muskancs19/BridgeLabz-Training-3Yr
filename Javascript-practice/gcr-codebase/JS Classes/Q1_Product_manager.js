class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applyDiscount(discountPercent) {
        this.price = this.price - (this.price * discountPercent / 100);
    }
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price},
Category: ${this.category}`;
    }
}
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1500, "Electronics"),
    new Product(3, "Mouse", 500, "Accessories"),
    new Product(4, "Keyboard", 1200, "Accessories"),
    new Product(5, "Mobile", 25000, "Electronics")
];

products[0].applyDiscount(10);
console.log("All Products:");
products.forEach(product => {
    console.log(product.displayDetails());
});
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\nProducts with Price Greater Than ₹1000:");

expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});