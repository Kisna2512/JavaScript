const sym = Symbol("Key");
const user = {
  name: "Krishna",
  [sym]: "It is a Symbol",
  "full name": "Krishna Gajanan Kotgire",
  age: 21,
  location: "Pune",
  email: "krishna@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

console.log(user.email);
console.log(user["full name"]);
console.log(user["email"]);
console.log(user[sym]);
//overwrite
user.email = "krishnakotgire@gmail.com";
// console.log(user.email);

// it will restrict all changes in object
Object.freeze(user);

user.greeting = function () {
  console.log("Good Evening!!");
};

user.greeting_ = function () {
  console.log(`Good Evening ${this.name}!!`);
};

console.log(user.greeting_());
