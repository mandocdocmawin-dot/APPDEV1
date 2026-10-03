// 1. Pass / Fail Ternary
const score = 72;
const result = score >= 70 ? "Pass" : "Fail";
console.log(`Score: ${score} -> ${result}`);

// 2. Even / Odd Ternary
const num = 7;
const parity = num % 2 === 0 ? "even" : "odd";
console.log(`Number: ${num} -> ${parity}`);

console.log("\n--- Comparison: age || 18 vs age ?? 18 ---");

// 3. Comparison for 0, null, and undefined
const testAges = [0, null, undefined];

testAges.forEach((age) => {
  console.log(`When age is ${age}:`);
  console.log(`  age || 18 -> ${age || 18}`);
  console.log(`  age ?? 18 -> ${age ?? 18}`);
});