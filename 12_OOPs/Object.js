function multiplier(num) {
  return num * 5;
}

multiplier.name_ = "Krishna";

console.log(multiplier.name_);
console.log(multiplier(5));
console.log(multiplier.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
  return this;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.print = function () {
  console.log(`score is ${this.score}`);
};

const x = new createUser("chai", 23);
const y = new createUser("tea", 25);
x.increment();
x.print();
