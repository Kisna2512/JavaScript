// This will help to learn Arrow function.

function greet(name) {
  console.log("Good Morning " + name);
}

console.log(greet("krishna"));

// using arrow function

const greet = () => {
  console.log("Good Morning");
};
console.log(greet());

// in one line you can do this

const greet1 = () => console.log("Good night");

console.log(greet1());

const greet2 = (name, sirname) => {
  return "Good Afternoon " + name + " " + sirname;
};

console.log(greet2("Krishna", "Kotgire"));
