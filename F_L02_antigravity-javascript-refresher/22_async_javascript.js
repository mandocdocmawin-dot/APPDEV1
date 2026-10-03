// A fetchUserMock(callback) function that uses setTimeout
function fetchUserMock(callback) {
  setTimeout(() => {
    callback({ name: "Marwin", age: 21 });
  }, 1000);
}
 
fetchUserMock((user) => {
  console.log("Got user:", user);
});


// Refactor fetchUserMock to Promise with async/await & try/catch
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Marwin", age: 22 }), 1000);
  });
}
 
async function showUser() {
  try {
    const user = await fetchUser();
    console.log("Got user:", user);
  } catch (error) {
    console.log("Failed to load user");
  }
}
 
showUser();

// Wrap Promise-based fetch() inside a callback-style function
function getTodo(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then(response => response.json())
    .then(data => {
      callback(null, data)
    })
    .catch(error => {
      callback(error, null)
    });
}

function handleTodo(error, data) {
  if (error) {
    console.error("Error fetching todo:", error);
  } else {
    console.log("Fetched todo:", data);
  }
}

getTodo(handleTodo);

// Promise-based fetch function handled via .then()/.catch()
function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/5")
    .then(response => response.json())
}

getTodo()
    .then(todo => console.log("Todo: ", todo))
    .catch(error => console.error("Something went wrong: ", error))

// Async/await fetch pattern with try/catch
async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/15");

  const data = await response.json();

  return data;
}

async function fetchTodo() {
  try {
    const todo = await getTodo();
    console.log("Todo: ", todo);
  } catch (error) {
    console.error("Something went wrong: ", error);
  }
}

fetchTodo();

// synchronous vs asynchronous
let name = "Marwin";
let age = 21;
let address = "123 Main St";

setTimeout(() => {
  console.log("This message is printed after 2 seconds");
}, 2000);

console.log("Name:", name);
console.log("Age:", age);
console.log("Address:", address);