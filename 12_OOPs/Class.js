class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword(password) {
    return `{this.password}abc`;
  }

  changeUserName(username) {
    return `${this.username.toUpperCase()}`;
  }
}

const user = new User("krishna", "kk@gmail.com", "123");
console.log(user.encryptPassword());
console.log(user.changeUserName());
