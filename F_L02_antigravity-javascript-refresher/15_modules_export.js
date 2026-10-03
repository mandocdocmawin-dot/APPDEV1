const userInfo = { name: "Marwin", age: 21 };
 
function greet() {
  return "Hello from module!";
}

export default greet;
export { userInfo };

console.log(greet());
console.log(userInfo);
