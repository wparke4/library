//getting the div with container class in the index.html
const container = document.querySelector('.container');

//array to contain the books
let myLibrary = [];
let removeBook = [];

//constructor for book objects
function Book() {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.hasBeenRead = trueOrFalse;
    /*const info = function() {
        console.log(author, ' is the author of ', title, '. Have I read this book? ', 
            trueOrFalse, '. There are ', numberOfPages, ' pages in this book.');
    }*/
}

//adds book to the myLibrary array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

//creating objects representing 4 books
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


for(let i=0; i<myLibrary.length; i++) {
    //container that will hold the book and removal button
    let bookContainer = document.createElement('div');
    bookContainer.setAttribute('id', i);
    container.appendChild(bookContainer);

    //card is child of bookContainer, displays information of the book it holds
    let card = document.createElement('p');
    bookContainer.appendChild(card);
    let author = myLibrary[i].author;
    let title = myLibrary[i].title;
    let pages = myLibrary[i].numberOfPages;
    let read = myLibrary[i].hasBeenRead;

    let str = author + ' wrote ' + title + ' it has ' + pages + ' pages ' + read;

    card.innerText = str;

    //button is child of bookContainer
    let button = document.createElement('button');
    button.setAttribute('id', title);
    bookContainer.appendChild(button);
    button.innerText = "Remove Book";

    button.addEventListener('click', function() {
        //1. remove the card that contains this book
        //this works because the id of the button does not change
        document.getElementById(i).innerHTML = '';
        //2. remove book from myLibrary array
        //add title of book to be removed to the removeBook library
        removeBook.push(title);
        compareAndRemove();
    }
    );
}

//loop through each book in myLibrary array
function compareAndRemove() {
    for(let i=0; i<myLibrary.length; i++) {
        for(a=0; a<removeBook.length; a++) {
            let trigger = true;
            if(removeBook[a] == myLibrary[i].title) {
            trigger = false;
            }
            if(trigger === false) {
                myLibrary.splice(i, 1);
            }
        }
    }
}