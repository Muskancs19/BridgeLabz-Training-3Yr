const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];
const originalTotal = cart.reduce(function(total, product) {
    return total + product.price;
}, 0);
let totalAfterCategoryDiscounts = 0;

console.log("===== Shopping Cart Report =====");

for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }
    let discountAmount = product.price * discountRate;
    let discountedPrice = product.price - discountAmount;

    totalAfterCategoryDiscounts += discountedPrice;

    console.log(
        product.item +
        ": Original Price = ₹" + product.price +
        ", Discount = ₹" + discountAmount +
        ", Final Price = ₹" + discountedPrice
    );
}
let overallDiscount = 0;

if (originalTotal > 50000) {
    overallDiscount = totalAfterCategoryDiscounts * 0.05;
}

let finalTotal = totalAfterCategoryDiscounts - overallDiscount;
console.log("---------------------------------");
console.log("Original Cart Total: ₹" + originalTotal);
console.log(
    "Total After Category Discounts: ₹" +
    totalAfterCategoryDiscounts
);
console.log("Extra Overall Discount: ₹" + overallDiscount);
console.log("Final Payable Amount: ₹" + finalTotal);
console.log("=================================");
