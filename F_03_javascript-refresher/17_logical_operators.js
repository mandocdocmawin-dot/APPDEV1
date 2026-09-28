console.log('Truthy and Falsy, null and undefined values');
const values = [0, "", "hello", null, undefined, [], {}];
 
values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});

console.log();
console.log('Logical Operators');
const username = "Marwin";
const password = "marwin123";
 
const canLogIn = username !== "" && password !== "";
console.log(canLogIn); // true
 
const isAdmin = false;
const isSubscriber = true;
const canWatch = isAdmin || isSubscriber;
const canEdit = isAdmin && isSubscriber;
console.log(canWatch); // true
console.log(canEdit);  // false
 
console.log("" || "default");        // "default" (first truthy)
console.log(username && "Welcome!");  // "Welcome!" (both truthy)
console.log(isAdmin && isSubscriber); // false (first falsy)
console.log(!canLogIn);                // false
console.log(!isAdmin);                  // true

