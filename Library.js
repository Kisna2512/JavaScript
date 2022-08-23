class library {
  constructor(bookList) {
    this.bookList = bookList;
    this.issedBooks = {};
  }

  getBookList() {
    // this.bookList.forEach((element) => {
    //   console.log(element);
    // });
    this.bookList.forEach((element) => {
      console.log(element);
    });
  }

  issueBook(bookName, User) {
    if (this.issedBooks[bookName] == undefined) {
      this.issedBooks[bookName] = User;
    } else {
      console.log("This Book is Already issued");
    }
  }

  returnbook(bookName) {
    delete this.issedBooks[bookName];
  }
}
