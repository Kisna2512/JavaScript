class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`UserName: ${this.username}`);
  }

  createId() {
    console.log(`_id: ${Math.floor(Math.random() * 1000)}`);
  }
}

const user1 = new User("krishna", "krishna@gmail.com");
user1.logMe();
user1.createId();
