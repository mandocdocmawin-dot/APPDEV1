const greet = name => "Hello, " + name; // implicit return
const square = n => n * n;               // implicit return

console.log(greet("Marwin")); // Output: Hello, Marwin
console.log(square(4.5));       // Output: 20.25

const sayHi = () => {
  console.log(greet("Marwin Mandocdoc")); // explicit return
};

sayHi();                       // Output: Hello, Marwin Mandocdoc