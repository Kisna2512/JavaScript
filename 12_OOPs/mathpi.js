const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const user = {
  name: "krishna",
  score: 10,
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(user, "name"));
