const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });


// const score = 72;
// const result = score >= 70 ? "Pass" : "Fail";
// console.log(result); // "Pass"

// const num = 7;
// console.log(num % 2 === 0 ? "even" : "odd"); // "odd"

rl.question('Enter your scores: ', (scores) => {
    const names = "Marwin";

    const score = scores;
    const result = score >= 70 ? "Pass" : "Fail";
    console.log(names, "Your results:", result); 

    const num = scores;
    console.log(num % 2 === 0 ? "even" : "odd"); 
    rl.close();
});   