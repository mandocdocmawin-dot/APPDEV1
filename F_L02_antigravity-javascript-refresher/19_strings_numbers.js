const raw = "  Marwin Mandocdoc  ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toUpperCase()); 
console.log(clean.includes("Rivera")); 
console.log(clean.includes("Marwin"));
console.log(clean.slice(0, 5)); 
console.log(`Full name: ${first} ${last}`);
