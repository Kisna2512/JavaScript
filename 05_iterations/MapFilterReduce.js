const myNums = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

const newArr = myNums.filter((num) => num > 5);
console.log(newArr);

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

const result = myArrOfObjects.filter((obj) => obj.age >= 22);
console.log(result);
