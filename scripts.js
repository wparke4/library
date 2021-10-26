//getting the div with container class in the index.html
const container = document.querySelector('.container');

//array to contain the books
let myLibrary = [];

//constructor for book objects
function Book() {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.hasBeenRead = trueOrFalse;
    const info = function() {
        console.log(author, ' is the author of ', title, '. Have I read this book? ', 
            trueOrFalse, '. There are ', numberOfPages, ' pages in this book.');
    }
}

//adds book to the myLibrary array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

//creating objects representing 3 books
//adding values to their properties
//adding them to myLibrary array
const bible = Object.create(Book);
bible.author = 'Jesus';
bible.title = 'Bible';
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
sapiens.author = 'Yuval Noah Harrari';
sapiens.title = 'Sapiens';
sapiens.numberOfPages = 421;
sapiens.hasBeenRead = true;
addBookToLibrary(sapiens);

const indonesiaEtc = Object.create(Book);
indonesiaEtc.author = 'Elizabeth Something';
indonesiaEtc.title = 'Indonesia Etc';
indonesiaEtc.numberOfPages = 350;
indonesiaEtc.hasBeenRead = true;
addBookToLibrary(indonesiaEtc);

//loops through and creates a container in the index.html file 
for(let i=0; i<myLibrary.length; i++) {
    //create element that will hold the book object information
    let card = document.createElement('p');
    container.appendChild(card);

    /*create button that will be used to remove the cell that contains this book
    then remove the book from the array*/
    let button = document.createElement('button');
    container.appendChild(button);
    button.innerText = "Remove Book";
    
    let author = myLibrary[i].author;
    let title = myLibrary[i].title;
    let pages = myLibrary[i].numberOfPages;
    let read = myLibrary[i].hasBeenRead;

    let str = author + ' wrote ' + title + ' it has ' + pages + ' pages ' + read;

    card.innerText = str;
}