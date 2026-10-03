const person = { name: "Marwin Mandocdoc", age: 28 };
const { name, age } = person;
console.log(name, age); // "Marwin Mandocdoc 28"
 
const hobbies = ["reading", "Watching Movies", "cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); // "reading Watching Movies"
console.log(hobbies[0]); // "reading Watching Movies"
 
function printName({ name, age }) {
  console.log(`My name is ${name} and I am ${age} years old.`);
}

printName(person); // "Marwin Mandocdoc 28"
