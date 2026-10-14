let productName = " wireless headphones PRO ";
let cleanedName = productName.trim();

cleanedName = cleanedName.toLowerCase();

let words = cleanedName.split(" ");
let capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

let formattedName = capitalizedWords.join(" ");

formattedName = formattedName.replace("Pro", "Pro Edition");

console.log("Original Product Name:", productName);
console.log("Cleaned Product Name:", formattedName);
console.log("Title Length:", formattedName.length);

