//  function that throws an Error
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
 
try {
  console.log(divide(10, 2));
} catch (error) {
  console.log("Something went wrong:", error.message);
}

// user object into a JSON string with JSON.stringify()
const user = { name: "Marwin Mandocdoc", age: 21, isStudent: false };
 
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Marwin Mandocdoc","age":21,...}'
 
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); 
console.log(typeof jsonString, typeof parsedUser); // string object
