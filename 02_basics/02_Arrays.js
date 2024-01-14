const x = [2, 3, 4, 5];
const y = ["Krishna", "Kartik", "Shubham", "Yash"];

x.push(y);
console.log(x);
const z = x.concat(y);
console.log(z);
// ... it is called spread operator
const z_ = [...x, ...y];
console.log(z_);

const arr = [1, 2, 3, [4, 5, 6], 7, [23, 45, [34, 21]]];

const flat_arr = arr.flat(Infinity);
console.log(flat_arr);

console.log(Array.isArray("Krishna"));
console.log(Array.from("Krishna"));
console.log(Array.from({ name: "Krishna" }));

let score1 = 23;
let score2 = 24;
let score3 = 25;
console.log(Array.of(score1, score3, score2));
