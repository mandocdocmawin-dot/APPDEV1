let name = "Marwin";
console.log(name) // Output: Marwin

const age = 25;
 
name = "Mawin";        // OK
console.log("new name:", name) // Output: name: Mawin

// age = 30;         // Error: Assignment to constant variable
// let age = 30;        // Error: Identifier 'age' has already been declared
console.log(age)
 
var city = "Pampanga"; // works, but avoid var
console.log(city)

function testVar() {
  var city = "Manila";
}

console.log("using function city:", city) // Output: Pampanga (var is function-scoped, not block-scoped)
