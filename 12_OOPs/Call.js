function setUserName(username) {
  this.username = username;
}

function createUserName(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const obj = new createUserName("krishna", "krishna12369@gmail.com", "1234");
console.log(obj);
