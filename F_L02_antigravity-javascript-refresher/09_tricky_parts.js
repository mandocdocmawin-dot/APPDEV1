console.log(10 == "10");   // true
console.log(10 === "10");  // false
 
let notDefined;
let empty = null;
 
console.log(notDefined); // undefined
console.log(empty);      // null

const obj = {
  name: "Marwin",
  regularMethod: function () {
    console.log(this.name);
  },
  arrowMethod: () => {
    console.log(this.name);
  },
};
 
obj.regularMethod(); // "marwin"     - this is set by how the function is called (obj.regularMethod())
obj.arrowMethod();   // undefined  - arrow functions borrow "this" from where they were written, not from obj
 
const original = [1, 2, 3];
console.log("original:", original); // [1, 2, 3]
 
const copyByReference = original;
copyByReference.push(4);
console.log("original using reference:", original); // [1, 2, 3, 4] - same array in memory, so both names see the change
 
const copyBySpread = [...original];
copyBySpread.push(5);
console.log("new original:", original);     // [1, 2, 3, 4]    - untouched by the spread copy
console.log("copy by spread:", copyBySpread); // [1, 2, 3, 4, 5] - its own separate array
