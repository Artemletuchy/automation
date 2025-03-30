class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }

  get title() {
    return this._title
  }


  set title(value) {
  if (typeof value !== "string") {
    console.log("Title is not string")
    }
    this._title = value
  }



  get author() {
    return this._author
  }


  set author(value) {
    if (typeof value !== "string") {
      console.log("Author is not string")
    }
    this._author = value
  }


  get year() {
    return this._year
  }


  set year(value) {
    if (typeof value !== "number") {
      console.log("Year is not number")
    }
    this._year = value
  }
  

  printInfo() {
    console.log(`Book: "${this.title}" by ${this.author}, published in ${this.year}.`)
  }

  static findOldestBook(books) {
    let oldestBook = books[0]

    books.forEach((book) => {
    if (book.year < oldestBook.year) {
       oldestBook = book;
      }
    })
    return oldestBook;
  }
}

export default Book;





