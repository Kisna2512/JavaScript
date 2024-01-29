// if

// if (true)
// {

// }

const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("User is logged in succesfully!!");
}
// <,>,==,===,!=,!==,<=,>= operators used for conditional checking
const temp = 40;
if (temp < 50) {
  console.log("Less than 50");
} else {
  console.log("Greater than or equal 50");
}

//implicit scope
const bal = 400;
// if (bal < 500) console.log("bal is less than 500"), console.log("Tested!!");
console.log(bal > 100 ? "Grater than 100" : "Less than 100");
