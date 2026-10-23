class Cart {
    constructor() {
        this.items = [];
    }
    addItem(name, price, quantity) {
        if (
            typeof name !== "string" ||
            name.trim() === "" ||
            !Number.isFinite(price) ||
            price < 0 ||
            !Number.isInteger(quantity) ||
            quantity <= 0
        ) {
            console.log("Invalid item details.");
            return;
        }

        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }
    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }
    applyCoupon(coupon) {
        const couponRegex = /^(SAVE|DISC)(\d{1,2})$/;
        const match = coupon.match(couponRegex);

        if (!match) {
            console.log("Invalid coupon format.");
            return this.getTotal();
        }

        const discountPercent = Number(match[2]);
        if (discountPercent < 1 || discountPercent > 100) {
            console.log("Coupon discount must be between 1% and 100%.");
            return this.getTotal();
        }

        const originalTotal = this.getTotal();

        const discountAmount =
            originalTotal * discountPercent / 100;

        const finalTotal = originalTotal - discountAmount;

        console.log(`Coupon Applied: ${coupon}`);
        console.log(`Discount: ${discountPercent}%`);
        console.log(`Original Total: ₹${originalTotal.toFixed(2)}`);
        console.log(`Discount Amount: ₹${discountAmount.toFixed(2)}`);
        console.log(`Final Total: ₹${finalTotal.toFixed(2)}`);

        return finalTotal;
    }
    displayCart() {
        console.log("\nShopping Cart:");

        this.items.forEach(item => {
            console.log(
                `${item.name} - ₹${item.price} × ${item.quantity} = ` +
                `₹${(item.price * item.quantity).toFixed(2)}`
            );
        });

        console.log(`Subtotal: ₹${this.getTotal().toFixed(2)}`);
    }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1500, 1);
cart.displayCart();
console.log("\nApplying Coupon:");
cart.applyCoupon("SAVE20");
console.log("\nTesting Invalid Coupon:");
cart.applyCoupon("SAVEABC");