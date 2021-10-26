/*To-Do
    1. enable user to toggle between read and not read
        a) issue: user can currently only toggle once per book
    2. Likely an issue of toggling once a book has removed 
        since the status is linked to the index of the book
        Once the index shifts from removing a book then the 
        status will not longer be synced to the correct book
    3. STYLE
    4. create back end where this is all saved
    5. allow users to sign in so that their book list is saved and
        they can access it
*/
const addBookButton = document.getElementById('addBookButton');
const addBookContainer = document.querySelector('.addBookContainer');

const typeOfInput = ['Author', 'Title', 'Book Length']

/*form must be submitted and cleared before addBookButton can create
    another form*/
let hasBeenEntered = false;

addBookButton.addEventListener('click', function() {
    //checks to make sure there is not already an unsubmitted form on page
    if(hasBeenEntered === false) {
        //indicates there is now an unsubmitted form on page
        hasBeenEntered = true;

        /*create the label and input field for author, title, page number, and if
        user has already read the book*/
        const formContainer = document.createElement('div');
            addBookContainer.appendChild(formContainer);
    
        const formAuthor = document.createElement('p');
            formContainer.appendChild(formAuthor);
            formAuthor.innerHTML = 'Author';

            const inputAuthor = document.createElement('input');
            inputAuthor.setAttribute('id', 'inputAuthor');
            formContainer.appendChild(inputAuthor);

        const formTitle = document.createElement('p');
            formContainer.appendChild(formTitle);
            formTitle.innerHTML = 'Title';

            const inputTitle = document.createElement('input');
            inputTitle.setAttribute('id', 'inputTitle');
            formContainer.appendChild(inputTitle);

        const formPages = document.createElement('p');
            formContainer.appendChild(formPages);
            formPages.innerHTML = 'Book Length';

            const inputPages = document.createElement('input');
            inputPages.setAttribute('id', 'inputPages');
            formContainer.appendChild(inputPages);

        const formRead = document.createElement('p');
            formContainer.appendChild(formRead);
            formRead.innerHTML = 'Have you read this book?';

            const inputRead = document.createElement('input');
            inputRead.setAttribute('id', 'inputRead');
            formContainer.appendChild(inputRead);

        const submitButton = document.createElement('button');
            formContainer.appendChild(submitButton);
            submitButton.innerHTML = 'Submit';
        
            submitButton.addEventListener('click', function() {
                //creates new object with the form values and adds the book to myLibrary
                const newBook = Object.create(Book);
                newBook.author = inputAuthor.value;
                newBook.title = inputTitle.value;
                newBook.numberOfPages = inputPages.value;
                newBook.hasBeenRead = inputRead.value;
                myLibrary.push(newBook);

                //deletes the form
                formContainer.innerHTML = '';

                //clears all existing cards then loops through to create cards for all myLibrary books
                clearAllCards();
                createCardLoop();
           
                //form submitted and cleared, allows addBookButton to create another form
                hasBeenEntered = false;
       })
    }
})

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

function createCardLoop() {
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

        let str = author + ' wrote ' + title + ' it has ' + pages + ' pages ';

        card.innerText = str;

        //create container for readBookButton and readBookStatusContainer
        let readBookContainer = document.createElement('div');
        bookContainer.appendChild(readBookContainer);

        /*necessary in order to clear readBookStatus off page
        because in order to do so I need to clear innerHTML of its parent
        without affecting anything else*/
        let readBookStatusContainer = document.createElement('div');
        readBookContainer.appendChild(readBookStatusContainer);

        //button to indicate if the user has read the book or not
        let readBookButton = document.createElement('button');
        readBookContainer.appendChild(readBookButton);
        readBookButton.innerHTML = 'Have you read this book?';

        function createBeenReadText() {
            let beenReadText = document.createElement('p');
            readBookStatusContainer.appendChild(beenReadText);
            beenReadText.innerHTML = myLibrary[i].hasBeenRead;
        };

        createBeenReadText();

        readBookButton.addEventListener('click', function() {
            if(read == false) {
                myLibrary[i].hasBeenRead = true;
            } else {
                myLibrary[i].hasBeenRead = false;
            }
            readBookStatusContainer.innerHTML = '';
            createBeenReadText();
        })

        //button to remove the book from list
        let removeBookButton = document.createElement('button');
        removeBookButton.setAttribute('id', title);
        bookContainer.appendChild(removeBookButton);
        removeBookButton.innerText = "Remove Book";

        removeBookButton.addEventListener('click', function() {
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
}

function clearAllCards() {
    container.innerHTML = '';
}

createCardLoop();

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