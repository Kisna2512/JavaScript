//global scope
var c = 300;
let a = 300;
if (true) {
  // local scope
  let a = 20;
  const b = 23;
  var c = 30;
}

console.log(a);
console.log(c);
