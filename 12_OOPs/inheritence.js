class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course is added by ${this.username}`);
  }
}

const obj = new Teacher("krishna", "krishna12369@gmail.com", "1234");
obj.addCourse();
obj.logMe();
