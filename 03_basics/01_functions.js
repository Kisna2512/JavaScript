function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
}

// function addTwoNumber(num1, num2) {
//   let res = num1 + num2;
//   return res;
// }

addTwoNumber(2, 3);

function userLogin(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(userLogin("Krishna"));
console.log(userLogin());

// rest operator in javascript
function calculateCartPrice(...num) {
  return num;
}

console.log(calculateCartPrice(200, 345, 567));

const user = {
  name: "Krishna",
  age: 21,
};

function ObjectHandle(anyObject) {
  console.log(
    `Name is ${anyObject.name} and age of the user is ${anyObject.age}`
  );
}

ObjectHandle(user);

ObjectHandle({
  name: "XYZ",
  age: 22,
});
