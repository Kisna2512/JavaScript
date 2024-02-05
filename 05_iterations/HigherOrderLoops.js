const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

// Maps
const mp = new Map();
mp.set(1, 2);
mp.set(2, 3);
mp.set(3, 4);
console.log(mp);
// for (const it of mp) {
//   console.log(it);
// }

// for (const [key, val] of mp) {
//   console.log(key + " -> " + val);
// }

const myObject = {
  Name: "Krishna",
  sirName: "Kotgire",
};

// it not works for object iteration
// for (const [key, val] of myObject) {
//   console.log(key + " -> " + val);
// }

const lang = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  sol: "Solidity",
};

// for (const [key, val] in lang) {
//   console.log(key + "-> " + val);
// }

for (const key in lang) {
  console.log(lang[key]);
}

const myArr = ["Apple", "Banana", "Litchi", "Mango"];
// for (const key in myArr) {
//   console.log(myArr[key]);
// }

console.log();

myArr.forEach((item) => console.log(item));

const myArrOfObjects = [
  {
    name: "Krishna",
    age: 21,
  },
  {
    name: "Kartik",
    age: 22,
  },
  {
    name: "Darshan",
    age: 23,
  },
  {
    name: "Yash",
    age: 21,
  },
  {
    name: "Rohit",
    age: 22,
  },
];
console.log();
myArrOfObjects.forEach((item) => {
  console.log(item.name + " " + item.age);
});
