//array to contain the books
let myLibrary = [];

//constructor for book objects
function Book() {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.hasBeenRead = trueOrFalse;
}

//adds book to the myLibrary array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

//creating objects representing 3 books
//adding values to their properties
//adding them to myLibrary array
const bible = Object.create(Book);
bible.author = 'jesus';
bible.title = 'bible';
bible.numberOfPages = 9000;
bible.hasBeenRead = false;
addBookToLibrary(bible);

const harryPotter1 = Object.create(Book);
harryPotter1.author = 'J.K. Rowling';
harryPotter1.title = 'Harry Potter and The Scorcerers Stone';
harryPotter1.numberOfPages = 123;
harryPotter1.hasBeenRead = true;
addBookToLibrary(harryPotter1);

const sapiens = Object.create(Book);
sapiens.author = 'yuval noah harrari';
sapiens.title = 'sapiens';
sapiens.numberOfPages = 421;
sapiens.hasBeenRead = true;
addBookToLibrary(sapiens);

console.log(myLibrary[2]);


/*for(let i=0; i<myLibrary.length; i++) {
    
}*/