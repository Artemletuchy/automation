import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('Harry Potter 1', 'Joan R', 2001);
const book2 = new Book('Harry Potter 2', 'Joan R', 2002);
const book3 = new Book('Harry Potter 3', 'Joan R', 2003);

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log('-------------------------------------------------------');

const eBook1 = new EBook('Harry Potter 4', 'Joan R', 2004, 'epub');
const eBook2 = new EBook('Harry Potter 5', 'Joan R', 2005, 'pdf');
const eBook3 = new EBook('Harry Potter 6', 'Joan R', 2006, 'mp3');

eBook1.printInfo();
eBook2.printInfo();
eBook3.printInfo();

console.log('-------------------------------------------------------');

const books = [book1, book2, book3, eBook1, eBook2, eBook3];

const oldestBook = Book.findOldestBook(books);
oldestBook.printInfo();

console.log('-------------------------------------------------------');

const eEBook1 = EBook.createEBookFromBook(book1, 'epub');
const eEBook2 = EBook.createEBookFromBook(book2, 'pdf');

book1.printInfo();
book2.printInfo();
eEBook1.printInfo();
eEBook2.printInfo();

console.log('-------------------------------------------------------');

book1.title = 'Harry Potter 7';
book1.author = 'Joan R';
book1.year = 2007;

eBook1.format = 'mobi';
