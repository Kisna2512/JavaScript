// console.log(myName.truelength);
const myArray = [10, 22, 23, 45, 54];

const myObject = {
  username: "krishna",
  age: 21,
};
// this function will get added to object
Object.prototype.ageOf = function () {
  console.log(`Age is ${this.age}`);
};

myObject.ageOf();
// myArray.ageOf();

Array.prototype.sayhello = function () {
  console.log("Hello");
};

myArray.sayhello();

// protoypal inheritence

const Teacher = {
  isAvailable: true,
};

const TAsupport = {
  makeAssignment: "Python Assignments",
  fulltime: true,
};

// TAsupport.__proto__ = Teacher;

console.log(TAsupport.isAvailable);

// modern syntax
Object.setPrototypeOf(Teacher, TAsupport);
console.log(Teacher.makeAssignment);

let myName = "Krishna          ";

String.prototype.truelength = function () {
  console.log(`Actual length of your string is ${this.trim().length}`);
};

myName.truelength();
"DYPIT     ".truelength();
