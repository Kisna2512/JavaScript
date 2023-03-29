let arr = [45, 6, 3];

// Map function makes new array
let a = arr.map((value) => {
  return value * 3;
});

console.log(a);

arr.map((value, ind) => {
  console.log(value, ind);
});

console.log(a);

// filter function

let arr2 = [23, 2, 4, 5, 6];

let a2 = arr2.filter((ele) => {
  return ele > 5;
});

console.log(a2);

// Reduce Method
let arr3 = [1, 2, 3, 4, 6, 4];
const reduce_func = (h1, h2) => {
  return h1 + h2;
};
let a3 = arr3.reduce(reduce_func);
console.log(a3);
