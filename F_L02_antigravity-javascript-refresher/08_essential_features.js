const hobbies = ["Watching", "gaming", "coding"];
hobbies.map(hobby => console.log("My favorite hobby is " + hobby));
 
const student = { name: "Marwin", age: 20 };
const { name, age } = student;
console.log("My name is " + name + " and I am " + age + " years old.");
 
const fruits = ["apple", "banana", "orange"];
const newFruits = [...fruits, "grape", "kiwi"]; // ["apple", "banana", "orange", "grape", "kiwi"]
console.log(newFruits);