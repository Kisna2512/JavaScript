const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.356;
console.log(otherNumber.toPrecision(3));

const x = 100000;
console.log(x.toLocaleString("en-IN"));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Maths
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.round(4.56));
console.log(Math.ceil(4.56));
console.log(Math.floor(4.56));
console.log(Math.min(4, 5, 6));
console.log(Math.max(4, 5, 6));
console.log(Math.floor(Math.random() * 90) + 10);
