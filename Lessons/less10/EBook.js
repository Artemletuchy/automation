import Book from "./Book.js"

class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year)
    this.format = format
  }

  get format() {
    return this._format
  }

  set format(value) {
    if (typeof value !== "string") {
      console.log("Format is not string")
    }
    this._format = value
  }

  printInfo() {
    console.log(`E-Book: "${this.title}" by ${this.author}, published in ${this.year}, format: ${this.format}`)
  }

  static createEBookFromBook(book, format) {
    return new EBook(book.title, book.author, book.year, format)
  }
}

export default EBook
