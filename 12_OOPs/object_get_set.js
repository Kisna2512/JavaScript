const User = {
  _email: "krishna2gmail.com",
  _password: "1234",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

console.log(User.email);
