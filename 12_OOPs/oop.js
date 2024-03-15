const user = {
  username: "Krishna",
  loginCount: 10,
  isSignedin: true,

  getdatabaseInfo: function () {
    console.log(`UserName: ${this.username}`);
    console.log(this);
  },
};

console.log(user["username"]);
console.log(user.getdatabaseInfo());

// Constructor function -it is used to create new instance
function User(username, loginCount, isSignedin) {
  this.username = username;
  this.loginCount = loginCount;
  this.isSignedin = isSignedin;
  return this;
}

const userOne = new User("Krishna", 12, true);
const userTwo = new User("Kartik", 13, false);
console.log(userOne);
console.log(userTwo);
