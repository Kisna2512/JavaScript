let marks = [50, 65, 78, 34];
console.log(marks);
console.log(marks[1]);
marks.push(67);
console.log(marks.length);

// Array methods

let a = [23, 45, 32, 12];
let b = a.toString();
console.log(b);
console.log(typeof b);

let c = a.join("?");
console.log(c, typeof c);

a.pop();
console.log(a);

let r = a.shift();
console.log(r, a);

let s = a.unshift("Hello");
console.log(a);
