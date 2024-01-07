// Primitive data types: Number,String,undefined,null,Symbol,BigInt,boolean
let name = "Krishna"; // String
let age = 21; // int
let isLoggedin = false; // boolean
// null -standalone value
// undefined -default value type
// symbol - unique

// object

// symbols
const ID = Symbol("123");
const anotherId = Symbol("123");
console.log(ID === anotherId);
// bigNumber
const bigNumber = 4234354524324235345n;
console.log(bigNumber);
console.log(typeof age);
console.log(typeof null); //output : object
console.log(typeof undefined); //output : undefined

// Non -primitive

// Array,objects,functions
const myArray = [123, 456, 3221, 567];
let myObj = {
  name: "krishna",
  age: 22,
};

console.log(myObj);

const myfun = function () {
  console.log("hello World");
};
console.log(typeof ID);
