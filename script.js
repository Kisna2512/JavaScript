Lecture 1
console.timeLog("Time Starts Here");
console.log("Hello World");
console.log(32 + 4);
console.log([32, 1, 2, 3, 4]);

console.table({
  name: "krishna",
  marks: 23,
});

Lecture 2
console.log(alert("Hii"));
console.error("This is Error");
console.warn("This is Warning");
console.assert(345 < 567, "This is wrong"); // if we write an exxpression which is false then only assertion statement will work
console.log("Hello world!");

console.log("Hello again, this time inside a collapsed group!");
console.log("Hello Darshan");

console.log("Hello Yash");
console.log();

Lecture 3
var a = 5;
console.log(a);

var a = "Hello World";
console.log(a);

let name = "Krishna";
// name = "Darshan";
console.log(name);
let task;

const age = 20;

console.log(age);

let arr = [12, 14, 17];
console.log(arr);

const arr1 = [12, 13, 14, 15];

console.log(arr1);

Lecture 7:Arrays
console.log("This is Array Tutorial");

const arr = [12, 14, 15, 16];
const mixed = ["orange", 12, 34.5];
const arr1 = ["apple", "245", [34, 56]];
console.log(arr1);

console.log(arr.length);
console.log(arr1[2]);
// console.log(Array.isArray("krishna"));

arr.push(45); // Add element at end of the array
console.log(arr);
arr.unshift(700); //Add Element at front of the array\
console.log(arr);
arr.reverse();
console.log(arr);

Object Creation and Access
let myobj = {
  name: "krishna kotgire",
  isActive: true,
  marks: [56, 67, 89],
};
console.log(myobj);
console.log(myobj.isActive);

Lecture 8

let age = 34;

if (age > 10) {
  console.log("Age is greater than 34");
} else {
  console.log("Age is less than 34");
}
let name = prompt("What is your name?");
let age = prompt("What is your age ?");
let roll = prompt("What is your position?");
console.log("Your name is: " + name);
console.log("Your age is: " + age);
console.log("Your position is: " + roll);

454 > 4566 ? "Smaller" : "greater";

let marks = 17;
switch (marks) {
  case 17:
    console.log("You are 17");
    break;
  case 34:
    console.log("You are 34");
  default:
    break;
}

Lecture 9

console.log("This is Lecture 9 ");

// Simple or Loop
for (let i = 0; i <= 6; i++) {
  console.log(i);
}

let obj = {
  name: "krishna",
  roll_no: 25,
  id: 467,
};

// for in loop
for (const key in obj) {
  console.log(key + "=" + obj[key]);
}

const fruits = ["Mango", "Apple", "litchi"];
// for each loop
fruits.forEach((element) => {
  console.log(element);
});

let a = 6;
// While loop
while (a > 0) {
  console.log(a);
  a--;
}

let b = 5;
// do-while loop
do {
  console.log(b);
  b++;
} while (b < 10);

const arr = [23, 45, 67, 89];
arr.forEach(function name(element, index, arr) {
  console.log(element, index, arr);
});

let myobj = {
  name: "Yash Ambekar",
  rollmo: "23",
  id: "345",
};
for (const key in myobj) {
  console.log(`The ${key} have value is equal to ${myobj[key]}`);
}

Lecture 10

function greetings(name) {
  console.log(`Hello ${name} How are you?`);
}

let name = prompt("Please Enter Your name");
greetings(name);

let add = function (a, b) {
  return a + b;
};

console.log(add(3, 4));

function uppercase(kuchbhi) {
  return `chutiya ho ${kuchbhi} ky be`;
}

console.log(uppercase("kk"));

Lecture 11

Manipulating websites using javascript

console.log("This is JavaScript 8th tutorial");

let a = window;
// alert("Hello krishna");
// window.alert("Hello Giteee");
a = confirm("Are you sure ?");
console.log(a);
a = window.innerHeight;
a = window.location;
a = scrollX;
a = location.toString();
console.log(a);

Lecture 12

JavaScript Dom Manipulation

console.log("This is video no 12");
let a = document.images;

console.log(a);

Lecture 14
let x = document.getElementById("myfirst");
x.style.color = "grey";
x.innerHTML = "<b>Krishna is good boy</b>";
x.innerText = "Kuldeep is my brother name";

document.querySelector("#myfirst");

Lecture 15

const element = document.querySelector(".add");
console.log(element);

const items = document.querySelector(".myclass");
const l_Items = items.children;
console.log(l_Items);

const mylist = document.querySelectorAll("this");
const firstItem = mylist[0];
const secondItem = mylist[1];
console.log(firstItem);
console.log(secondItem);

var data = node.nodetype;
console.log(data);

console.log("Welcome to tutorial 15");

let cont = document.querySelector(".no");
cont = document.querySelector(".container");
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName)
console.log(nodeType)
Node types
1. Element
2. Attribute
3. Text Node
8. Comment
9. document
10. docType

console.log(cont.childNodes);
console.log(cont.children);

let container = document.querySelector("div.container");

console.log(container.children[1].children[0].children);

console.log(container.firstChild);
console.log(container.firstElementChild);

console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.children);
console.log(container.childElementCount); // Count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);

console.log("Hii i'm in ");
document.getElementById("heading").addEventListener("click", function name(e) {
  console.log("You have clicked");
});

document.querySelector(".container").addEventListener("mouseover", function () {
  document.body.style.color = "red";
});

document.querySelector(".container").addEventListener("dblclick", function () {
  document.body.style.color = "blue";
});

Lecture 23

console.log("Hii ");
console.log("Math Tutorial");

let a = 5;
let b = 6;
let c;
// console.log(c);
c = a + b;
c = a - b;
c = a * b;
c = a / b;

c = Math.ceil(5.6);
c = Math.sqrt(9);
c = Math.floor(4.5);
c = Math.round(2.3);
c = Math.abs(-4);
c = Math.sin();
c = Math.floor(90 + (100 - 90) * Math.random());
console.log(c);

console.log("This is 25 th video");

let divEle = document.createElement("div");

let val = localStorage.getItem("text");

let text;

if (val == null) {
  text = document.createTextNode("This is Edititable Content");
} else {
  text = document.createTextNode(val);
}

divEle.appendChild(text);

divEle.setAttribute("id", "elem");
divEle.setAttribute("class", "elem");
divEle.setAttribute(
  "style",
  "border:2px solid black; width: 154px; margin: 34px; padding:23px;"
);

let container = document.querySelector(".container");
let first = document.getElementById("myfirst");

container.insertBefore(divEle, first);
console.log(divEle, container, first);

divEle.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  if (noTextAreas == 0) {
    let html = elem.innerHTML;
    divEle.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
  }
  //listen for the blur event on textarea
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });
});

console.log("This is tutorial 25");
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// Create a new element
let divElem = document.createElement("div");

// Add text to that created element
let val = localStorage.getItem("text");
let text;
if (val == null) {
  text = document.createTextNode("This is my element. click to edit it");
} else {
  text = document.createTextNode(val);
}
divElem.appendChild(text);

// Give element id, style and class
divElem.setAttribute("id", "elem");
divElem.setAttribute("class", "elem");
divElem.setAttribute(
  "style",
  "border:2px solid black; width: 154px; margin: 34px; padding:23px;"
);

// Grab the main container
let container = document.querySelector(".container");
let first = document.getElementById("myfirst");

// Insert the element before element with id first
container.insertBefore(divElem, first);

console.log(divElem, container, first);

// add event listener to the divElem
divElem.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  if (noTextAreas == 0) {
    let html = elem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
  }
  //listen for the blur event on textarea
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });
});

console.log("Hello");

// Object Literal
let car = {
  name: "BMW",
  topSpeed: 300,
  run: function (Speed) {
    console.log(`It will Running on speed: ${Speed}`);
  },
};

console.log(car);

//Car Class Constructor

function GeneralCar(name, topSpeed) {
  this.name = name;
  this.topSpeed = topSpeed;
  this.run = function (Speed) {
    console.log(`It will Running on speed: ${Speed}`);
  };
}

car1 = new GeneralCar("Alt 500", 788);
console.log(car1);

Lecture 31

 Latest JavaScript Syntax
class Employee {
  constructor(name, id, city) {
    this.name = name;
    this.id = id;
    this.city = city;
  }

  slogan() {
    return `My Name is ${this.name}`;
  }

  static add(a, b) {
    return a + b;
  }
}

obj = new Employee("Krishna", 23, "Pune");
console.log(obj);
console.log(obj.slogan());

console.log(Employee.add(4, 5));

class Programmer extends Employee {
  constructor(name, id, city, Domain) {
    super(name, id, city);
    this.Domain = Domain;
  }
}

krishna = new Programmer("krishna", 24, "Mumbai", "Software Development");
console.log(krishna);

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
console.log("You have clicked the button");

const xhr = new XMLHttpRequest();

// xhr.open("GET", "krishna.txt", true);

xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);
xhr.getResponseHeader("Content-type", "application/json");

xhr.onprogress = function () {
  console.log("On Progress");
};

// xhr.onreadystatechange = function () {
//   console.log("Ready state is ", xhr.readyState);
// };

xhr.onload = function () {
  if (this.status === 200) {
    console.log(this.responseText);
  } else {
    console.error("Error in fetching");
  }
};

// xhr.send();
params = `{"name":"test34sad545","salary":"123","age":"23"}`;
xhr.send(params);
console.log("We are done");

  console.log("You have clicked the fetchBtn");

  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // Open the object
  // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

  // USE THIS FOR POST REQUEST
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("Content-type", "application/json");

  // What to do on progress (optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };

  // xhr.onreadystatechange = function () {
  //     console.log('ready state is ', xhr.readyState);

  // }

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("Some error occured");
    }
  };

  // send the request
  params = `{"name":"test1234","salary":"123","age":"23"}`;
  xhr.send(params);

  console.log("We are done!");
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  console.log("You have clicked the pop handler");

  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // Open the object
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById("list");
      str = "";
      for (key in obj) {
        str += `<li>${obj[key].employee_name} </li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };

  // send the request
  xhr.send();
  console.log("We are done fetching employees!");
}

CallBack

const students = [
  { name: "krishna", Age: 23 },
  { name: "Yash", Age: 23 },
];

function enrollStudent(student, CallBack) {
  setTimeout(() => {
    students.push(student);
    console.log("Student Enrolled Succesfully");
    CallBack();
  }, 3000);
}

function getStudent() {
  setTimeout(() => {
    let str = "";
    students.forEach(function (student) {
      str += `<li>${student.name}<li/>`;
    });
    document.getElementById("students").innerHTML = str;

    console.log("Students Fetched");
  }, 1000);
}

let newStudent = { name: "Shubham", Age: 45 };
enrollStudent(newStudent, getStudent);
getStudent();
