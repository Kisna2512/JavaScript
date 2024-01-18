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
