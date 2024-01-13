// Array
const myArr = [0, 2, 1, 3];
const myArr2 = new Array(2, 3, 4, 5);
console.log(myArr[1]);

// Array methods
myArr.push(4);
myArr.pop();
myArr.unshift(8);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(1));
console.log(myArr.indexOf(2));

const newArr = myArr.join();
console.log(newArr);

console.log(myArr.slice(1, 2));
console.log(myArr.splice(1, 2));
console.log(myArr);
