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

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myArr1 = myArr.map((num) => num + 10);

// chaining
const myArr2 = myArr
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 20);
console.log(myArr2);

const myArr3 = [1, 2, 3];
const myTotal = myArr3.reduce((acc, cur) => acc + cur, 0);
console.log(myTotal);

const myArr4 = [1, 2, 3, 4, 5];
const total = myArr4
  .map((num) => num + 1)
  .filter((num) => num % 2 == 0)
  .reduce((acc, num) => acc + num, 0);
console.log(`Total is: ${total}`);
