// Stack- Primitive data types
// Heap-  Non-primitive data types

let x = 4;
y = x;
console.log(y);
y = 3;
console.log(x);
console.log(y);

// objects saves in heap memory

let obj1 = {
  name: "krishna",
  email: "krishna@gmail.com",
};
// if we changes in obj2 then it will reflect into obj1 because they reference is in heap memory
let obj2 = obj1;
console.log([obj1.email, obj2.email]);
obj2.email = "krishnakotgire@gmail.com";
console.log([obj1.email, obj2.email]);
