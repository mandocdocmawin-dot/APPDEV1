function greet(name) {
  return "Hello, " + name;
}
 
const square = (num) => {
  return num * num;
};

function array(arr1, arr2) {
  return [arr1, arr2];
}
 
function calculator(a, b) {
  return { sum: a + b, product: a * b };
}

console.log(greet("Marwin"));
console.log(square(4));
console.log(calculator(3, 5));
console.log(array([1, 2, 3], [4, 5, 6]));
