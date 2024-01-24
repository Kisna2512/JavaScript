// this keyword is used for referring current context
const user = {
  name: "Krishna",
  price: 200,
  welcomeMessage: function () {
    console.log(`${this.name} , welcome to the world of js`);
    console.log(this);
  },
};

user.welcomeMessage();
console.log(this);

function check() {
  console.log(this);
}

// check();

// const sum = (a, b) => {
//   return a + b;
// };

// implicit return function
const sum = (a, b) => a + b;
const fun = () => ({ name: "Krishna" });
console.log(sum(2, 4));
sum();
console.log(fun());
