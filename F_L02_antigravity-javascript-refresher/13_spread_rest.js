const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log("newNumbers:", newNumbers); // [ 1, 2, 3, 4, 5 ]
console.log("Original numbers unchanged:", numbers); // [ 1, 2, 3 ]

const user = { name: "Marwin", age: 28 };
const newUser = { ...user, email: "mawin.mandocdoc@gmail.com" };
console.log("newUser:", newUser); // { name: 'Marwin', age: 28, email: 'mawin.mandocdoc@gmail.com' }
console.log("Original user unchanged:", user); // { name: 'Marwin', age: 28 }

function sum(...args) {
  console.log("Rest parameter collected args:", args);
  return args.reduce((total, n) => total + n, 0);
}
console.log("Sum result:", sum(1, 2, 3, 4)); // 10


