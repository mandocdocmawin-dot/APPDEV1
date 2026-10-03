const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [ 1, 2, 3, 4, 5 ]
 
const user = { name: "Marwin", age: 28 };
const newUser = { ...user, email: "mawin.mandocdoc@gmail.com" };
console.log(newUser); // { name: 'Marwin', age: 28, email: 'mawin.mandocdoc@gmail.com' }
 
function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

