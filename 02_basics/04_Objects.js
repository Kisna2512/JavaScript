const user = new Object(); // Singleton object

user.id = "123abc";
user.name = "Krishna Kotgire";
user.isloggedIn = false;
// console.log(user);

// Nested Objects
const regularUser = {
  email: "krishna@gmail.com",
  fullname: {
    name: "Krishna",
    middleName: "Gajanan",
    lastName: "Kotgire",
  },
};

// console.log(regularUser.fullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 }; // spread operator
// console.log(obj3);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("isloggedIn"));
