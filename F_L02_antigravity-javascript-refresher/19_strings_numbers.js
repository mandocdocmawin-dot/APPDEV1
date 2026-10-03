const raw = "  Marwin Mandocdoc  ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toUpperCase()); 
console.log(clean.includes("Rivera")); 
console.log(clean.includes("Marwin"));
console.log(clean.slice(0, 5)); 
console.log(`Full name: ${first} ${last}`);

// Numbers: Price formatting
const price = 49.9876;
console.log("Formatted Price: $" + price.toFixed(2));

// Numbers: Detecting invalid numbers
const validNum = Number("123.45");
const invalidNum = Number("invalid");

console.log("Is validNum NaN?", Number.isNaN(validNum));
console.log("Is invalidNum NaN?", Number.isNaN(invalidNum));
