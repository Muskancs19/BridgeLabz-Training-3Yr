class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`"${this.title}" has been issued successfully.`);
        }
    }
    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" is already available.`);
        } else {
            this.isIssued = false;
            console.log(`"${this.title}" has been returned successfully.`);
        }
    }
    displayDetails() {
        console.log(
            `Title: ${this.title}, Author: ${this.author}, ` +
            `ISBN: ${this.ISBN}, Status: ${this.isIssued ? "Issued" : "Available"}`
        );
    }
}

const books = [
    new Book("JavaScript Basics", "John Smith", "101"),
    new Book("Python Programming", "Alice Brown", "102"),
    new Book("Web Development", "David Miller", "103"),
    new Book("Data Structures", "Robert Wilson", "104", true)
];

function displayAvailableBooks() {
    console.log("\nAvailable Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
        return;
    }

    availableBooks.forEach(book => book.displayDetails());
}
function issueBookByISBN(ISBN) {
    const book = books.find(book => book.ISBN === ISBN);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }
}

displayAvailableBooks();

console.log("\nIssuing book with ISBN 102:");
issueBookByISBN("102");

console.log("\nAvailable books after issuing:");
displayAvailableBooks();

console.log("\nReturning book with ISBN 102:");
const bookToReturn = books.find(book => book.ISBN === "102");

if (bookToReturn) {
    bookToReturn.returnBook();
}

console.log("\nFinal available books:");
displayAvailableBooks();