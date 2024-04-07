class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return `${this._password}krishna`;
  }

  set password(value) {
    return (this._password = value);
  }
}

const obj = new User("krishna123@gmail.com", "abf");
console.log(obj.password);
