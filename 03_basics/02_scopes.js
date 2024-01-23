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

function One() {
  const Name = "Krishna";
  function Two() {
    const age = 21;
    console.log(Name);
  }
  Two();
}

// One();
console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));
